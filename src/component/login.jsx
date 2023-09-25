import { useForm } from 'react-hook-form'
import './css/login.css'
import logo from '/logo.jpg'
import { useNavigate } from 'react-router-dom'
import  {toast}  from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios';
import Cookies from 'js-cookie'

// import { urlApi } from "../conso/url";
const urlApi = "http://localhost:3000/api/"

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
    const RediretProfil = () => {
        navigate('/profil')
    }

    const login = async (values)=>{
        let response = await axios.post(`${urlApi}log`,values)
        return response
    }
    const {register, handleSubmit} = useForm({
        email:'',
        password:''
    });

    const {mutate:loginUser} = useMutation(
        {
            mutationFn: (Mydata)=>login(Mydata),
            onSuccess: (succes)=>{
                toast.success(succes.data.message)
                Cookies.set('token', succes.data.token,{ expires: 3600*24, path: '' })
                setTimeout(()=>{
                    navigate('/profil')
                },3000)
               
               
            },
            onError:(e)=>{
                console.log(e.response.data.message)
                toast.error(e.response.data.message)
            }
        }
    )

    const onSubmit = (data)=>loginUser(data)


    return (
        <>
        <div className="login">
            <div className="blocLogin">
                <img src={logo} onClick={RediretAcc} className='logo' alt="" />
                <form action="" className='formLogin' onSubmit={handleSubmit(onSubmit)}>
                    <p className='inputFields'><input type="text"  {...register("email", {required: "svp votre  Email", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "svp entrer un mail valide"}})} placeholder='Email' /></p>
                    <p className='inputFields'><input type="password" {...register("password", {required:true})} placeholder='Mot de passe ' /></p>
                    <div className="linkT">
                        <a href="#" onClick={redirectCre}>Créer un compte ?</a>
                        <a href="#" onClick={redirectPass}>Mot de passe oublié?</a>
                    </div>
                    <button className='btnSign' type='submit'>Connexion</button>
                </form>
            </div>
        </div>
       
        </>
    )
    
}
export default Login