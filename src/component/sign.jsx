import { useNavigate } from 'react-router-dom'
import './css/login.css'
import logo from '/logo.jpg'
import {useForm} from "react-hook-form"
import { useMutation } from '@tanstack/react-query'
import  axios  from 'axios'
import { useState } from 'react'
import Message from './Message'
import {toast} from 'react-hot-toast'
import {urlApi}  from "../conso/url.js";

// const urlApi = "http://localhost:3000/api/"


function Sign() {
    let navigate = useNavigate();
    // let[errorMessage,setErrorMessage] = useState(null)
    const redirect = ()=>{ 
    }
    const redirectPass = ()=>{
        navigate("/forgot")
    }
    const RediretAcc = () => {
        navigate('/')
    }
    const {register, handleSubmit, watch ,formState:{errors}, getValues} = useForm({
        nom:'',
        prenom:'',
        email:'',
        numero:'',
        societe:'',
        fonction:'',
        ville:'',
        pays:'',
        password:''
    })
    const {mutate:bailleur, isLoading,isSuccess,isError, reset} = useMutation({
        mutationFn: async (send)=>{
            console.log(send)

            let response = await axios.post(`${urlApi}bailleur`,send);
            return response;
        },
        onSuccess: (success)=>{
            toast.success(success.data.message)
            setTimeout(()=>{
                navigate('/login')
            },3050)
                // setErrorMessage(success.data)
            },
        onError: (errors)=>{
            // setErrorMessage(errors.response)
        //  console.log(errors) 
        toast.error(errors.response)
        }
      
    })
    let onSubmit = data=> bailleur(data);
    // if(isLoading){
    //    toast.success("chargement encours ....")
    // }

    return (
        <>
        <div className="login">
            {/* {isSuccess && (
                <Message reset={reset} body={"Enregistrement effectuée "}></Message>
            )} */}
           
            <div className="blocSign">
                <img src={logo} onClick={RediretAcc} className='logo' alt="" />
                <form action="" className='formSign' onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <p className='inputFieldsSign'>
                        <input  type="text" {...register("nom",{require:true, minLength:2,maxLength:15,pattern:{ value:/^[A-Za-z]+$/i,message:"le nom doit pas contenir de chiffre"}, })} placeholder='Nom' />
                        {/* <p>{errors.nom?.message}</p> */}
                        <input type="text"  {...register("prenom",{require:true,minLength:2,maxLength:15,pattern:{ value:/^[A-Za-z]+$/i,message:"le nom doit pas contenir de chiffre"} })} placeholder='Prénom' />
                        {/* <p>{errors.prenom?.message}</p> */}
                        </p>
                    <p className='inputFieldsSign'>
                        <input type="email" {...register("email", {required: "svp votre  Email", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "svp entrer un mail valide"}})} placeholder='Email' />
                        {/* <p>{errors.email?.message}</p> */}
                        <input type="number" {...register("numero",{require:true, minLength:10})} placeholder='Numéro' />
                        {/* <p>{errors.numero?.message}</p> */}
                        </p>

                    <p className='inputFieldsSign'>
                        <input type="text"  {...register("societe",{require:true})}  placeholder='Société' /> 
                        {/* <p>{errors.societe?.message}</p> */}
                        <input type="text"  {...register("fonction",{require:true})} placeholder='Fonction' />
                        {/* <p>{errors.fonction?.message}</p> */}
                        </p>
                    <p className='inputFieldsSign'>
                        <input type="text"  {...register("ville",{require:true})} placeholder='Ville' />
                        {/* <p>{errors.ville?.message}</p> */}
                        <input type="text"  {...register("pays",{require:true})} placeholder='Pays' />
                        {/* <p>{errors.pays?.message}</p> */}
                        </p>
                    <p className='inputFieldsSign'>
                        <input type="password"  {...register("password",{require:true})} placeholder='Mot de passe ' autoComplete="new-password" /> 
                        {/* <p>{errors.password?.message}</p> */}
                        <input type="password"  {...register("comfirmer",{require:true, validate: (value)=>value === watch("password") || "mot passe incorret"})} placeholder='confirmer' />
                        {/* <p>{errors.confirmer?.message}</p> */}
                        </p>
                    <div className="linkT">
                        <a href="#" onClick={redirect}>Se connecter ?</a>
                        <a href="#" onClick={redirectPass}>Mot de passe oublié?</a>
                    </div>
                    <button className='btnSign'  type='submit'>Valider</button>
                    {/* <p className='errorMes'>{errorMessage?.message }</p> */}
                    {/* <p style={{color:'red'}}>{errorMessage?.data.message}</p> */}
                </form>

            </div>
        </div>
       
        </>
    )
    
}
export default Sign