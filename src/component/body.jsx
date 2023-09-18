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
// import AiFillDownCircle from "react-icons/ai";
import  {BsCheckCircle, BsGeoAlt, BsDroplet}  from "react-icons/bs";
function Body(){
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
                </div>
                <p className="ouk-absolute">
                    Avez-vous des projet innovant et enregistrer à votre nom ? <br /> N’hésiter pas à ajouter vos projet et bénéficier d’une actionnaire et ou un financement.
                </p>
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
                            <h3>Avantage pour être actionnaire</h3>
                            <p>Vos projets sont financer à 100% par nos bailleur et la possibilité d’avoir une actionnaire pour un projet innovant.</p>
                            <p>70% des parts revient au porteur de projet respectant toutes les formalités</p>
                            <p>Toutes les conditions respectées et disposant d’un projet innovant bénéficiera des financements de son projet.</p>
                        </div>
                        <img src={avant2} alt="" className='avant1' />
                    </div>
                </div>
                <div className="rea">
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
                                    <p>Date d'ajout: <span className='clIcon'>06/07/2023</span></p>
                                    <p>Date Financée: <span className='clIcon'>06/08/2023</span></p>
                                    <p><BsGeoAlt/> <span className='clIcon'>Abidjan, côte d'ivoire</span></p>
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
                                    <p>Date d'ajout: <span className='clIcon'>06/07/2023</span></p>
                                    <p>Date Financée: <span className='clIcon'>06/08/2023</span></p>
                                    <p><BsGeoAlt/> <span className='clIcon'>Abidjan, côte d'ivoire</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="cardPro">
                            
                            <img src={esuan} alt="" />
                            <div className="blocInfOuk">
                                <div className="inf1">
                                    <h6>Projet de plateForme d'apprentissage de langue  </h6>
                                    <p className='finan'>Financé</p>
                                </div>
                                <p>Un projet qui à pour but de valorisé le talent africain et permet aux artiste de bénéficier des subvention grâce à leur travail </p>
                                <div className="info2">
                                    <p>Date d'ajout: <span className='clIcon'>06/07/2023</span></p>
                                    <p>Date Financée: <span className='clIcon'>06/08/2023</span></p>
                                    <p><BsGeoAlt/> <span className='clIcon'>Abidjan, côte d'ivoire</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="cardPro">
                            
                            <img src={Kvivri} alt="" />
                            <div className="blocInfOuk">
                                <div className="inf1">
                                    <h6>Projet de Gestion d'entreprise d'Agriculture </h6>
                                    <p className='finan'>Financé</p>
                                </div>
                                <p>Un projet qui à pour but de valorisé le talent africain et permet aux artiste de bénéficier des subvention grâce à leur travail </p>
                                <div className="info2">
                                    <p>Date d'ajout: <span className='clIcon'>06/07/2023</span></p>
                                    <p>Date Financée: <span className='clIcon'>06/08/2023</span></p>
                                    <p><BsGeoAlt/> <span className='clIcon'>Abidjan, côte d'ivoire</span></p>
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
           </div>
        </>
    )
}
export default Body