import './css/voir.css'
import NavBar from "./navBar"
import Footer from './footer';
import all from '../assets/A.png';
import wassa from '../assets/wassa.png';
import esuan from '../assets/esuan.png';
import Kvivri from '../assets/K-vivri.png';
import QuickBank from '../assets/logo.png';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
// const urlApi = "http://localhost:3000/api/"
import {urlApi} from '../conso/url.js';

function VoirFinance() {
    let [result, setResult] = useState()
    let navigate = useNavigate();
    let session = sessionStorage.getItem('user')
    session = JSON.parse(session)

    // console.log(session)
    // if(session){
    //     setTimeout(()=>{
    //         let btnFinance = document.querySelector('.btnfinC')
    //         btnFinance.style.diplay = 'flex'
    //         console.log(btnFinance)
    //     },50)
       
    // }
    const listTodo = async ()=>{
        const response = await axios.get(`${urlApi}projetAll`)
        return response
    }

    const {data, isSuccess} = useQuery({
        queryKey:['liste'],
        queryFn: listTodo,
    })
    if(isSuccess){
        // console.log(data)
    }
    // console.log(result)
  
 
 
   
    function valideFinance(event) {
        let cookie = Cookies.get("token")
      const idProjet = event.target.getAttribute("keys");
      console.log(idProjet)
      const response = axios.get(`${urlApi}valide/${idProjet}`,{
        headers: {
            'Authorization':  `token ${cookie}`
        }
      })
      response
      .then((data)=>{
        toast.success("Votre demande est encours d'analyse")
        setTimeout(()=>{
            navigate('/profil')
        },3050)
      })
      .catch((e)=>{
        console.log(e)
      })
        // let parent = closest(event.target)
    }
   
   


    return(
        <>
        <NavBar service={"#service"}  contact={"#contact"} />
        <div className="VoirFinance">
            <div className="caroul">
                <h3>Oukami Finance</h3>
            </div>
            <div className="blocVoirFinan">
                
                {
                    
                    data?.data.message.map((item)=>{
                        if(item.statut !== "true"){
                        return (
                        <div className="carVoir" key={item._id}>
                            <img src={item.image}  alt=""  />
                            <div className="infoProj">
                                <p className='encours'>{item.statut =="false"?"quête":'encours'}</p>
                                <h5>{item.nomProjet}</h5>
                                <p>{item.description}</p>
                                <div className="bVoir1">
                                    <p>Date: <span>{item.date.split('T')[0]}</span></p>
                                    <button style={session ? {display:"flex"}: {display:"none"}} onClick={valideFinance} className='btnfinC' keys={item._id} type="button">financer</button>
                                    <button className='staus' style={item.statut == 'false'?{backgroundColor:"red"}:{backgroundColor:"green"}} disabled>{item.budget} Fr</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    })
                }
                {/* <div className="carVoir">
                    <img src={all}  alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Encours</p>
                        <h5>All Streaming</h5>
                        <p>All Streaming une plateforme de streaming typiquement africain valorisant la culture africaine ....</p>
                        <div className="bVoir1">
                            <p>Date: <span>07/08/2023</span></p>
                            <button style={session ? {display:"flex"}: {display:"none"}} className='btnfinC' type="button">financer</button>
                            <button className='staus' disabled>status: True</button>
                        </div>
                    </div>
                </div>
                <div className="carVoir">
                    <img src={wassa} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Encours</p>
                        <h5>Wassa Wassa</h5>
                        <p>Ce projet vise à facilité les échange commerciaux dans des région</p>
                        <div className="bVoir1">
                            <p>Date: <span>07/08/2023</span></p>
                            <button style={session ? {display:"flex"}: {display:"none"}} className='btnfinC' type="button">financer</button>
                            <button className='staus' disabled>status: True</button>
                        </div>
                    </div>
                </div>
                <div className="carVoir">
                    <img src={esuan} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Finance</p>
                        <h5>Esuan School</h5>
                        <p>Permet aux passionnés de la langue locale ivoirienne d&apos;apprendre  </p>
                        <div className="bVoir1">
                            <p>Date: <span>07/08/2023</span></p>
                            <button style={session ? {display:"flex"}: {display:"none"}} className='btnfinC' type="button">financer</button>
                            <button className='staus' disabled>status: True</button>
                        </div>
                    </div>
                </div>
                <div className="carVoir">
                    <img src={Kvivri} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Encours</p>
                        <h5>K-vivri</h5>
                        <p>Plateforme de gestion d&apos;entreprise agricole  </p>
                        <div className="bVoir1">
                            <p>Date: <span>07/08/2023</span></p>
                            <button style={session ? {display:"flex"}: {display:"none"}} className='btnfinC' type="button">financer</button>
                            <button className='staus' disabled>status: True</button>
                        </div>
                    </div>
                </div>
                <div className="carVoir">
                    <img src={ QuickBank} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Encours</p>
                        <h5>QUICK BANK</h5>
                        <p>Une banque en ligne facilitant les echanges avec les autres banque et les différents service de mobile money </p>
                        <div className="bVoir1">
                            <p>Date: <span>07/08/2023</span></p>
                            <button style={session ? {display:"flex"}: {display:"none"}} className='btnfinC' type="button">financer</button>
                            <button className='staus' disabled>status: True</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <Footer />
        </>
    )
    
}
export default VoirFinance