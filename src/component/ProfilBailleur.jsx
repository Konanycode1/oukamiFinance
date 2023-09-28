import './css/profil.css'
import wassa from '../assets/wassa.png';
import QuickBank from '../assets/logo.png';
import { BsWrenchAdjustableCircleFill, BsCardChecklist,BsClockHistory,BsFillGearFill } from "react-icons/bs";
import { BiSolidEdit,BiCalendar,BiMoney,BiUserCheck } from "react-icons/bi";
import Footer from './footer';
import {useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import urlApi from '../conso/url.js';
// const urlApi = "http://localhost:3000/api/"
import { useQuery } from '@tanstack/react-query';



Footer
function ProfilBailleur() {
    const [token, setToken] = useState(null)
    // const [result, setResult] = useState({})
    
   
    let location = useLocation();
    let {pathname} = location;
    const splitpath = pathname.split("/")

    let navigate = useNavigate();
    const redirectHome = ()=>{
        navigate("/Voir")
    }
    let session = sessionStorage.getItem("user")
    session = JSON.parse(session)
    if(!session){
        navigate('/login')
    }
 
const fetchUser = async()=>{
    let sendToken = Cookies.get("token")
    setToken(sendToken)
    // const headers = { 'Authorization': `token ${token}`};
    let response = await axios.get(`${urlApi}getBailleur`,{
        headers: {
            'Authorization':  `token ${sendToken}`
        }
    })
    return response
}


const {data, isSuccess, isError} = useQuery(
{
    queryKey: ['user'],
    queryFn: fetchUser,
     
})
if(token == null){
    navigate("/login")
}
    return(
        <>
            {/* {console.log(data)} */}
            <div className="container">
               
                <div className="userBloc">
                    <div className="ident">
                        <h5>{data?.data.message.nom} {data?.data.message.prenom}</h5>
                        <p>{data?.data.message.societe}</p>
                    </div>
                    <div className="idenBtn">
                        <button type="button" id='enlin' className='btnIden'>En ligne</button>
                        <button type="button" onClick={redirectHome} className='btnIden'>Voir</button>
                    </div>
                </div>
                 <div className="menuScreen">
                    <ul>
                        <li className={splitpath[1] === "profil" ? "actives" : ""}><a href="/profil"><BiUserCheck className='mobilIcon' /></a></li>
                        <li className={splitpath[1] === "liste" ? "actives" : ""}><a href="/liste"><BsCardChecklist className='mobilIcon'/></a></li>
                        <li className={splitpath[1] === "hsitorique" ? "actives" : ""}><a href="/historique"><BsClockHistory className='mobilIcon'/></a></li>
                        <li className={splitpath[1] === "param" ? "actives" : ""}><a href=""><BsFillGearFill className='mobilIcon'/></a></li>
                    </ul>
                </div>
                <div className="menuProfil">
                    <ul>
                    <li className={splitpath[1] === "profil" ? "actives" : ""}><a href="/profil">Profile</a></li>
                        <li className={splitpath[1] === "liste" ? "actives" : ""}><a href="/liste">Liste De Projet Valider</a></li>
                        <li className={splitpath[1] === "hsitorique" ? "actives" : ""}><a href="/historique">Historique</a></li>
                        <li className={splitpath[1] === "param" ? "actives" : ""}><a href="">Parametre</a></li>
                    </ul>
                </div>
                <hr />
                <div className="fosProfil">
                    <div className="desiProfil">
                        <div className="cardProfil">
                            <p className='bailPic'>B</p>
                            <p className='icoPro'><BiSolidEdit /></p>
                            <div className="infoUser">
                                <div className="fields verr">
                                    <h6>Nom Prénom</h6>
                                    <p>{data?.data.message.nom} {data?.data.message.prenom}</p>
                                </div>
                                <hr />
                                <div className="fields">
                                    <h6>Numero</h6>
                                    <p>+225 {data?.data.message.numero}</p>
                                </div>
                                <hr />
                                <div className="fields">
                                    <h6>Email</h6>
                                    <p>{data?.data.message.email}</p>
                                </div>
                                <hr />
                                <div className="fields">
                                    <h6>Société</h6>
                                    <p>{data?.data.message.societe}</p>
                                </div>
                                <hr />
                                <div className="fields">
                                    <h6>Fonction</h6>
                                    <p>{data?.data.message.fonction}</p>
                                </div>
                                <hr />
                                <div className="fields">
                                    <h6>Pays,Ville</h6>
                                    <p>{data?.data.message.ville},{data?.data.message.pays}</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="projetFinance">
                            <div className="pr1">
                            <h4>Infos projet Financé</h4>
                            </div>
                            
                            <div className="projFin">
                                <img src={wassa} alt="" />
                                <div className="infoSurProj">
                                    <p>Projet validé par les agents de Oukami finance et à obtenu un financement de la part de Mr DIARA de la BAD </p>
                                    <p><BiCalendar /> 15/08/2023</p>
                                </div>
                            </div>
                            <div className="projFin">
                                <img src={QuickBank} alt="" />
                                <div className="infoSurProj">
                                    <p>Projet validé par les agents de Oukami finance et à obtenu un financement de la part de Mr Kesse Fred de la Banque mondiale </p>
                                    <p><BiCalendar /> 22/08/2023</p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="biProfil">
                        <div className="bicard">
                            <div className="titleBi">
                                <h6>Notification </h6>
                            </div>
                            <div className="projBin">
                                <p ><BsWrenchAdjustableCircleFill className='rondBibib'/></p>
                                <div className="infoSurProj">
                                    <h6>Publication de projet</h6>
                                    <p>M. Clarck Evan à publié un projet innovant dans le domaine du transport</p>
                                    <p><BiCalendar /> 22/08/2023</p>
                                </div>
                            </div>
                            <div className="projBin">
                                <p ><BiMoney className='rondBibibF'/></p>
                                <div className="infoSurProj">
                                    <h6>Financement de projet</h6>
                                    <p>M. Moise Konan à abtenir un financement de 40 000 000 FrCFA pour son projet</p>
                                    <p><BiCalendar /> 22/08/2023</p>
                                </div>
                            </div>
                            <div className="projBin">
                                <p ><BsWrenchAdjustableCircleFill className='rondBibib'/></p>
                                <div className="infoSurProj">
                                    <h6>Publication de projet</h6>
                                    <p>M. Clarck Evan à publié un projet innovant dans le domaine du transport</p>
                                    <p><BiCalendar /> 22/08/2023</p>
                                </div>
                            </div>
                            <div className="projBin">
                                <p ><BsWrenchAdjustableCircleFill className='rondBibib'/></p>
                                <div className="infoSurProj">
                                    <h6>Publication de projet</h6>
                                    <p>M. Clarck Evan à publié un projet innovant dans le domaine du transport</p>
                                    <p><BiCalendar /> 22/08/2023</p>
                                </div>
                            </div>
                            <div className="projBin">
                                <p ><BsWrenchAdjustableCircleFill className='rondBibib'/></p>
                                <div className="infoSurProj">
                                    <h6>Publication de projet</h6>
                                    <p>M. Clarck Evan à publié un projet innovant dans le domaine du transport</p>
                                    <p><BiCalendar /> 22/08/2023</p>
                                </div>
                            </div>
                            
                            

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}
export default ProfilBailleur