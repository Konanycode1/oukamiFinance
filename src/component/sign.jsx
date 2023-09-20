import { useNavigate } from 'react-router-dom'
import './css/login.css'
import logo from '/logo.jpg'

function Sign() {
    let navigate = useNavigate();

    const redirect = ()=>{
        navigate("/login")
    }
    const redirectPass = ()=>{
        navigate("/forgot")
    }
    const RediretAcc = () => {
        navigate('/')
    }
    return (
        <>
        <div className="login">
            <div className="blocLogin">
                <img src={logo} onClick={RediretAcc} className='logo' alt="" />
                <form action="" className='formLogin'>
                    <p className='inputFields'><input type="text" placeholder='Nom' /> <input type="text" placeholder='Prénom' /></p>
                    <p className='inputFields'><input type="text" placeholder='Email' /> <input type="number" placeholder='Numéro' /></p>
                    <p className='inputFields'><input type="text" placeholder='Société' /> <input type="text" placeholder='Fonction' /></p>
                    <p className='inputFields'><input type="text" placeholder='Ville' /> <input type="text" placeholder='Pays' /></p>
                    <p className='inputFields'><input type="text" placeholder='Mot de passe ' /> <input type="text" placeholder='confirmer' /></p>
                    <div className="linkT">
                        <a href="#" onClick={redirect}>Se connecter ?</a>
                        <a href="#" onClick={redirectPass}>Mot de passe oublié?</a>
                    </div>
                    <button className='btnSign' type='button'>Valider</button>
                </form>
            </div>
        </div>
       
        </>
    )
    
}
export default Sign