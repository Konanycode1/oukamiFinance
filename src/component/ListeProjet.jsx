import './css/profil.css'
// import wassa from '../assets/wassa.png';
// import QuickBank from '../assets/logo.png';
// import { BsWrenchAdjustableCircleFill } from "react-icons/bs";
import {BiNetworkChart } from "react-icons/bi";
import {useLocation } from 'react-router-dom';
import Footer from './footer';
Footer
function ListeProjet() {

    let location = useLocation();
    let {pathname} = location;
    const splitpath = pathname.split("/")

    return(
        <>
            <div className="container">
                <div className="userBloc">
                    <div className="ident">
                        <h5>Abraham konan</h5>
                        <p>Bailleur</p>
                    </div>
                    <div className="idenBtn">
                        <button type="button" id='enlin' className='btnIden'>En ligne</button>
                        <button type="button" className='btnIden'>Action</button>
                    </div>
                </div>
                <div className="menuProfil">
                    <ul>
                        <li className={splitpath[1] === "profil" ? "actives" : ""}><a href="/profil">Profile</a></li>
                        <li className={splitpath[1] === "liste" ? "actives" : ""}><a href="liste">Liste De Projet Valider</a></li>
                        <li className={splitpath[1] === "histo" ? "actives" : ""}><a href="">Historique</a></li>
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
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>Ivoire projet</h5>
                                <p className='encoProj'>encours de financement</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>Black projet</h5>
                                <p className='encoProj'>encours de financement</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>PAPA projet</h5>
                                <p className='encoProj'>encours de financement</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>Group IVOIRE projet</h5>
                                <p className='encoProj'>encours de financement</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>Wassa Wassa</h5>
                                <p className='encoProj ajF'>Financé</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>All Streaming</h5>
                                <p className='encoProj ajF'>Financé</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>K-Vivri</h5>
                                <p className='encoProj ajF'>Financé</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>K-Shop</h5>
                                <p className='encoProj ajF'>Financé</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>Doum projet</h5>
                                <p className='encoProj ajF'>Financé</p>
                            </div>
                            <div className="listenPro">
                                <BiNetworkChart className="icoPojetFi"/>
                                <h5>Sika projet</h5>
                                <p className='encoProj ajF'>Financé</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <Footer />

        </>
    )
}
export default  ListeProjet
