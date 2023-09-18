import '../App.css'
import stati from '../assets/stati.png'

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
                        <p><span className='rondBull'>1</span> Obtenir un compte</p>
                        <p><span className='rondBull'>2</span> Visulaliser les différents projet</p>
                        <p><span className='rondBull'>3</span> Faire vos choix de projet</p>
                        <p><span className='rondBull'>5</span> Discuter des critère du projet</p>
                        <p><span className='rondBull'>6</span> Valider votre mise en action</p>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Body