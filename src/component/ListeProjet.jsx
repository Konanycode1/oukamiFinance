import './css/profil.css'
// import wassa from '../assets/wassa.png';
// import QuickBank from '../assets/logo.png';
// import { BsWrenchAdjustableCircleFill } from "react-icons/bs";
import {BiNetworkChart ,BiUserCheck} from "react-icons/bi";
import {  BsCardChecklist,BsClockHistory,BsFillGearFill } from "react-icons/bs";
import {useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Footer from './footer';
import { useQuery } from '@tanstack/react-query';
import ListeFinance from '../conso/listeFinance';
// const urlApi = "http://localhost:3000/api/"
import {urlApi} from '../conso/url.js';


  
function ListeProjet() {
    const [token, setToken] = useState(null)
    const [resultFinance, setResultFinance] = useState()
    let navigate = useNavigate()
 
    const redirectHome = ()=>{
        navigate("/Voir")
    }
//gestion de pathname
    let location = useLocation();
    let {pathname} = location;
    const splitpath = pathname.split("/")
//verification de la session
    let session = sessionStorage.getItem("user")
    session = JSON.parse(session)
    if(!session){
        navigate('/login')
    }
//fonction  pour la récupération des données
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
// hook pour la requete
    const {data, isSuccess, isError} = useQuery(
    {
        queryKey: ['user'],
        queryFn: fetchUser
    })
    if(isSuccess){
        sessionStorage.setItem('keyUser', JSON.stringify(data.data.message._id))
    }
    if(token == null){
        navigate("/login")
    }
   
   

    return(
        <>
        
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
                        <li className={splitpath[1] === "liste" ? "actives" : ""}><a href="liste"><BsCardChecklist className='mobilIcon'/></a></li>
                        <li className={splitpath[1] === "historique" ? "actives" : ""}><a href="/historique"><BsClockHistory className='mobilIcon'/></a></li>
                        <li className={splitpath[1] === "param" ? "actives" : ""}><a href=""><BsFillGearFill className='mobilIcon'/></a></li>
                    </ul>
                </div>
                <div className="menuProfil">
                    <ul>
                        <li className={splitpath[1] === "profil" ? "actives" : ""}><a href="/profil">Profile</a></li>
                        <li className={splitpath[1] === "liste" ? "actives" : ""}><a href="/liste">Liste De Projet Valider</a></li>
                        <li className={splitpath[1] === "historique" ? "actives" : ""}><a href="/historique">Historique</a></li>
                        <li className={splitpath[1] === "param" ? "actives" : ""}><a href="">Parametre</a></li>
                    </ul>
                </div>
                <hr />
                <div className="fosProfil">
                    <div className="generaListe">
                        <div className="listeProjetEn">
                            <h6>Liste de vos projet encours et financés</h6>
                        </div>
                        <div className="listeProjetContent">
                            <ListeFinance />
                        </div>
                    </div>
                   
                </div>
            </div>
            <Footer />

        </>
    )
}
export default  ListeProjet
