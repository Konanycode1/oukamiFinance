import { useNavigate } from "react-router-dom"
import './css/projetA.css'
import { BsArrowLeft } from "react-icons/bs";
function AjoutProjet() {

    let navigate = useNavigate();

    const back = ()=>{
        navigate("/")
    }

    return(
        <>
        <div className="BlocProjet">
            <p onClick={back} className='retour'>< BsArrowLeft /> Retour</p>
            <div className="blocInfoAjout">
                <h5 className='b1'>Ajouter votre projet innovant pour bénéficier un financement couvrant vos activité et votre innnovation</h5>
                <form action="" className='formProj'>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="">Nom</label> <br />
                            <input type="text"  />
                        </p>
                        <p>
                            <label htmlFor="">Prénom</label> <br />
                            <input type="text" />
                        </p>
                    </div>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="">Numéro</label> <br />
                            <input type="text"  /> 
                        </p>
                        <p>
                            <label htmlFor="">Email</label><br />
                            <input type="text"  />
                        </p>
                    </div>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="">Nom du projet</label>  <br />
                            <input type="text" placeholder='' />
                         </p>
                        <p>
                            <label htmlFor="">Description du projet</label> <br />
                            <input type="text" /> 
                        </p>
                    </div>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="">Budget</label> <br />
                            <input type="text" />
                        </p>
                        <p>
                            <label htmlFor="">Durée du projet</label> <br />
                            <input type="text" />
                        </p>
                    </div>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="">Numéro télédeclarant</label> <br />
                            <input type="text" /> 
                        </p>
                        <p>
                            <label htmlFor="">Un logo du projet </label> <br />
                            <input type="file" /> 
                        </p>
                       
                    </div>
                    <button className='btnFournir' type="button">Fournir votre projet</button>
                </form>
            </div>
            <div className="infoImpt">
                <p>Nos agents s&apos;occupérons de votre projet une fois fournir qui a une durée de 72h, vous récéverez un mail de confirmation qui vous donnera plus d&apos;information concernant votre projet soumis   </p>
                <p>Une fois votre projet validé pas nos agent, ils se chargerons de trouver un financement pour votre projet</p>
                <p>Après une durée de 365 jours, si votre projet n&apos;a toujours pas de financement, il sera rétirer de notre plateforme.</p>
            </div>
            <p className="fot">Oukami Finance © CopyRigth 2023</p>
        </div>
        </>
    )
    
}
export default AjoutProjet