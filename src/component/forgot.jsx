import './css/login.css'
import logo from '/logo.jpg'
import { useNavigate } from 'react-router-dom'
function Forgot() {
    let navigate = useNavigate();

    const redirectCre = ()=>{
        navigate("/sign")
    }
    const redirectLogin = ()=>{
        navigate("/login")
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
                    <p className='inputFields'><input type="text" placeholder='Nouveau mot de passe' /></p>
                    <p className='inputFields'><input type="text" placeholder='Confirmer' /></p>
                    <div className="linkT">
                        <a href="#" onClick={redirectCre}>Créer un compte ?</a>
                        <a href="#" onClick={redirectLogin}>se connecter ?</a>
                    </div>
                    <button className='btnSign' type='button'>Modifier</button>
                </form>
            </div>
        </div>
       
        </>
    )
    
}
export default Forgot