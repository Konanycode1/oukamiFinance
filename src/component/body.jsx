import '../App.css'
import stati from '../assets/stati.png';
import avant1 from '../assets/avant1.png';
import avant2 from '../assets/avant2.png';
import picture1 from '../assets/p1.jpg';
import picture2 from '../assets/p2.jpg';
import picture3 from '../assets/p3.jpg';
import picture4 from '../assets/p4.jpg';
import all from '../assets/A.png';
import wassa from '../assets/wassa.png';
import esuan from '../assets/esuan.png';
import Kvivri from '../assets/K-vivri.png';
import soum from '../assets/soum.gif'
import patien from '../assets/patien.gif'
import send from '../assets/send.gif'
import finan from '../assets/finan.jpg';
import user from '../assets/user.jpg';
// import AiFillDownCircle from "react-icons/ai";
import  {BsCheckCircle, BsGeoAlt, BsDroplet,BsQuote}  from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Body(){

    let navigate = useNavigate();
    function redirectLogin() {
        navigate('/login')
    }
    const redirectAjout = () => {
        navigate('/ajout')
    }
   
    return(
        <>
           <div className="main">
                <div className="sliced">
                    <div className="ouk-info">
                        <div className="ouk-titre">
                            <h3>OUKAMI</h3>
                            <p>Finance</p>
                        </div>
                        <h6 className="agence">Votre agent chargé de vous trouver des financement pour vos projet innovateur.</h6>
                    </div>
                    <img className='sti' src={stati} alt="image Oukami"  />
                    <p className="ouk-absolute">
                    Avez-vous des projet innovant et enregistrer à votre nom ? <br /> N’hésiter pas à ajouter vos projet et bénéficier d’une actionnaire et ou un financement.
                    </p>
                </div>
               
                <button className='btnComm' type='button'>Commencez</button>

                <div className="Ouk-offre">
                    <div className="oukOffre1">
                        <h3>Offrez-vous une possibilité en tant que porteur de projet et bénéficiez d’un financement et ou une actionnaire</h3>
                    </div>
                    <div className="oukOffre2">
                        <h5>Devenir un porteur de projet ou Bailleur</h5>
                        <div className="oukCardGroup">
                            <div className="bail">
                                Porteur de projet
                            </div>
                            <div className="bail">
                                Bailleur
                            </div>
                        </div>
                    </div>
                </div>
                <div className="oukComment">
                    <h3>Comment ça marche ?</h3>
                    <div className="comment">
                        <div className="oukCom1">
                            <h5>Bailleur</h5>
                            <p><span className='rondBull'>1</span> Obtenir un compte</p>
                            <p><span className='rondBull'>2</span> Visulaliser les différents projet</p>
                            <p><span className='rondBull'>3</span> Faire vos choix de projet</p>
                            <p><span className='rondBull'>5</span> Discuter des critère du projet</p>
                            <p><span className='rondBull'>6</span> Valider votre mise en action</p>
                        </div>
                        <div className="oukCom1">
                            <h5>Porteur de projet</h5>
                            <p><span className='rondBull'>1</span>Publier un projet </p>
                            <p><span className='rondBull'>2</span> Remplissez nos différentes conditions </p>
                            <p><span className='rondBull'>3</span> Poster vos projet innovant</p>
                            <p><span className='rondBull'>5</span> Faire le suivie de vos projet</p>
                            <p><span className='rondBull'>6</span> Attendez vos financement.</p>
                        </div>
                    </div>
                </div>
                <div className="avantage">
                    <div className="avantage1">
                        <img src={avant1} alt="" className='avant1' />
                        <div className="textAvant1">
                            <h3>Avantage pour être actionnaire</h3>
                            <p>Un projet entièrement financer et suivie par les agents de Oukami et chaque actionnaire  bénéficiera de ses parts une fois le projet établir. </p>
                            <p>15% des parts revient au financier pour un projet entièrement financer par vous. Possibilité d’être actionnaire majoritaire du pro</p>
                        </div>
                    </div>
                    <div className="avantage2">
                        
                        <div className="textAvant1">
                            <h3>Avantage pour être Porteur de projet</h3>
                            <p>Vos projets sont financer à 100% par nos bailleur et la possibilité d’avoir une actionnaire pour un projet innovant.</p>
                            <p>70% des parts revient au porteur de projet respectant toutes les formalités</p>
                            <p>Toutes les conditions respectées et disposant d’un projet innovant bénéficiera des financements de son projet.</p>
                        </div>
                        <img src={avant2} alt="" className='avant1' />
                    </div>
                </div>
                <div id='service' className="rea">
                    <h3>Pour la réalisation des projets, nous disposons des experts en gestion de projet </h3>
                    <div className='contentrea'>
                        <div className="picture1">
                            <img src={picture1} className='picture' alt="" />
                            <img src={picture2} className='picture' alt="" />
                        </div>
                        <div className="textRea">
                            <p>Tout est inclus une fois votre projet est reçu un financement  </p>
                            <p> <BsCheckCircle className='ico1' /> Des sessions de déploiement et de formation</p>
                            <p> <BsCheckCircle className='ico1' /> Des conseils d’experts pour monter en compétence sur la gestion de votre trésorerie</p>
                            <p> <BsCheckCircle className='ico1' /> Notre équipe Dynamique faire le suivie et vous aide à la réalisation de vos projet </p>
                            <button type="button" className='btnGeneral'>Contactez un client</button>
                        </div>
                        <div className="picture1">
                            <img src={picture3} className='picture' alt="" />
                            <img src={picture4} className='picture' alt="" />
                        </div>
                    </div>

                </div> 
                <h2 className='solution'>La  solution pour valoriser vos talents en tant que créateur, innovateur et experts</h2>   
                <div className="projetFinanc">
                    <h2>Projet Financé</h2>
                    <div className="projetCard">
                        <div className="cardPro">
                            <img src={all} alt="" />
                            <div className="blocInfOuk">
                                <div className="inf1">
                                    <h6>Projet de streaming </h6>
                                    <p className='finan'>Financé</p>
                                </div>
                                <p>Un projet qui à pour but de valorisé le talent africain et permet aux artiste de bénéficier des subvention grâce à leur travail </p>
                                <div className="info2">
                                    <p>Date d&apos;ajout: <span className='clIcon'>06/07/2023</span></p>
                                    <p>Date Financée: <span className='clIcon'>06/08/2023</span></p>
                                    <p><BsGeoAlt/> <span className='clIcon'>Abidjan, côte d&apos;ivoire</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="cardPro">
                            
                            <img src={wassa} alt="" />
                            <div className="blocInfOuk">
                                <div className="inf1">
                                    <h6>Projet de transport </h6>
                                    <p className='finan'>Financé</p>
                                </div>
                                <p>Un projet qui à pour but de valorisé le talent africain et permet aux artiste de bénéficier des subvention grâce à leur travail </p>
                                <div className="info2">
                                    <p>Date d&apos;ajout: <span className='clIcon'>06/07/2023</span></p>
                                    <p>Date Financée: <span className='clIcon'>06/08/2023</span></p>
                                    <p><BsGeoAlt/> <span className='clIcon'>Abidjan, côte d&apos;ivoire</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="cardPro">
                            
                            <img src={esuan} alt="" />
                            <div className="blocInfOuk">
                                <div className="inf1">
                                    <h6>Projet de plateForme d&apos;apprentissage de langue  </h6>
                                    <p className='finan'>Financé</p>
                                </div>
                                <p>Un projet qui à pour but de valorisé le talent africain et permet aux artiste de bénéficier des subvention grâce à leur travail </p>
                                <div className="info2">
                                    <p>Date d&apos;ajout: <span className='clIcon'>06/07/2023</span></p>
                                    <p>Date Financée: <span className='clIcon'>06/08/2023</span></p>
                                    <p><BsGeoAlt/> <span className='clIcon'>Abidjan, côte d&apos;ivoire</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="cardPro">
                            
                            <img src={Kvivri} alt="" />
                            <div className="blocInfOuk">
                                <div className="inf1">
                                    <h6>Projet de Gestion d&apos;entreprise d&apos;Agriculture </h6>
                                    <p className='finan'>Financé</p>
                                </div>
                                <p>Un projet qui à pour but de valorisé le talent africain et permet aux artiste de bénéficier des subvention grâce à leur travail </p>
                                <div className="info2">
                                    <p>Date d&apos;ajout: <span className='clIcon'>06/07/2023</span></p>
                                    <p>Date Financée: <span className='clIcon'>06/08/2023</span></p>
                                    <p><BsGeoAlt/> <span className='clIcon'>Abidjan, côte d&apos;ivoire</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="btnPlus">
                    <button type="button" className='btnGeneral rech'>Projet encours de recherche de financement</button>
                    <button type="button" className='btnGeneral'>Voir plus</button>
                </div>
                <div className="rejoindre">
                    <div className="rejoiCard">
                        <p className='iconAbsolu'> <BsDroplet className='iconRejoi' /></p>
                        <h3 className='textRejoi'>Rejoignez nos experts en gestion de projet </h3>
                        <p>Tout simplement en ajoutant un projet innovant rentable et capable d’attirer les bailleurs </p>
                    </div>
                </div>
                <div className="oukMessage">
                    <div className="cardMessa">
                        <img src={soum} className='logogif' alt="" />
                        <h6>Soumettez nous un projet</h6>
                        <p>Remplissez nos formulaire d’envoies de patienter pour la validation.</p>  
                    </div>
                    <div className="cardPatient">
                        <div className="textPatient">
                            <h6>Mettre votre patience en marche </h6>
                            <p>La patience est une vertu qui s&apos;acquiert avec de la patience.Patientez pour recevoir un email de validation de projet en moins 72h</p>
                        </div>
                        <img src={patien} className='logoPatien' alt="" />

                    </div>
                    <div className="cardPatient">
                        <div className="textPatient">
                            <h6>Message reçu </h6>
                            <p>Une fois le message reçu, deux possibilité soit projet validé ou mise en attente pour de analyse à profondir.</p>
                        </div>
                        <img src={send} className='logoPatien' alt="" />

                    </div>
                    <div className="cardMessa">
                        <img src={finan} className='logogif' alt="" />
                        <h6>Projet validé </h6>
                        <p> Vous serez appelez pas nos agent et pour commencer les processus de financement.</p>  
                    </div>
                </div>
                <div className="testemo">
                    <div className="testCard">
                        <p className='quoteTesteMo'><BsQuote className='icoTeste' /></p>
                        <div className="blocTestemo">
                            <div className="cardPeople">
                                <img src={user} className='userP' alt="" />
                                <p>Un grand merci à Oukami finance pour cette offre exceptionnelle </p>
                                <div className='infoPeople'>
                                    <h6>Diarassouba MAMADOU</h6>
                                    <p>Développeur</p>
                                </div>
                            </div>

                            <div className="cardPeople">
                                <img src={user} className='userP' alt="" />
                                <p>Un grand merci à Oukami finance pour cette offre exceptionnelle </p>
                                <div className='infoPeople'>
                                    <h6>Diarassouba MAMADOU</h6>
                                    <p>Développeur</p>
                                </div>
                            </div>

                            <div className="cardPeople">
                                <img src={user} className='userP' alt="" />
                                <p>Un grand merci à Oukami finance pour cette offre exceptionnelle </p>
                                <div className='infoPeople'>
                                    <h6>Diarassouba MAMADOU</h6>
                                    <p>Développeur</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>  
                <div className="btnSous">
                    <div className="btnBloc">
                        <button type="button" onClick={redirectLogin}  className='btnInves'>Devenir  investisseur à OUKAMI Finance</button>
                        <button type="button" className='btnInves ' onClick={redirectAjout}>Obtenir un financement </button>
                    </div>
                </div>
                <div className="contact " id='contact'>
                    <h2>Contactez Nous </h2>

                    <div className="contactBloc">
                        <form action="" className='contaForm'>
                            <div className="imputFields">
                                <input type="text" placeholder='Votre nom'/>
                                <input type="text" placeholder='Votre email' />
                            </div>
                            <p><textarea name="" id="" cols="30" rows="10" placeholder='Message '></textarea> </p>
                            
                            <button type="button" className='btnGeneral'>Envoyez</button>
                        </form>
                    </div>
                </div>
                                                                                                                 
           </div>
        </>
    )
}
export default Body