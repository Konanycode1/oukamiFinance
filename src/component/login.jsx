import './css/login.css'
import logo from '/logo.jpg'
import { useNavigate } from 'react-router-dom'
function Login() {
    let navigate = useNavigate();

    const redirectCre = ()=>{
        navigate("/sign")
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
                    <p className='inputFields'><input type="text" placeholder='Email' /></p>
                    <p className='inputFields'><input type="text" placeholder='Mot de passe ' /></p>
                    <div className="linkT">
                        <a href="#" onClick={redirectCre}>Créer un compte ?</a>
                        <a href="#" onClick={redirectPass}>Mot de passe oublié?</a>
                    </div>
                    <button className='btnSign' type='button'>Connexion</button>
                </form>
            </div>
        </div>
       
        </>
    )
    
}
export default Login