import { useNavigate } from "react-router-dom"
import './css/projetA.css'
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
// import ajoutProjet from "../conso/ajoutProjet.js";
import { useMutation } from "@tanstack/react-query";
// import { useState } from "react";
// import { url } from "../conso/url";

const urlApi = "http://localhost:3000/api/"



function AjoutProjet() {
    // let {verif, setVerif} = useState()
    let navigate = useNavigate();

    const back = ()=>{
        navigate("/")
    }
    const {register,setValue,handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            nom:'',
            prenom:'',
            numero:'',
            email:'',
            nomProjet:'',
            description:'',
          durerProjet:'',
            numeroTeleDecla:'',
            image:''
        }
    });
    const {mutate:ajoutProjet} = useMutation({
        mutationFn: async (Mydata)=>{
            const formData = new FormData()

            for (const key in Mydata){
                formData.set(key, Mydata[key])
            }
            const response =  await fetch(`${urlApi}ajout`, {
                method: 'POST',
                body:formData,
              });
              return response.json()
        },
        onError: (errors)=>{
            console.log(errors)
        },
        onSuccess: ()=>{
            console.log("ok")
        }
    })
    
    const onSubmit = data => ajoutProjet(data);
    return(
        <>
        <div className="BlocProjet">
            <p onClick={back} className='retour'>< BsArrowLeft /> Retour</p>
            <div className="blocInfoAjout">
                <h5 className='b1'>Ajouter votre projet innovant pour bénéficier un financement couvrant vos activité et votre innnovation</h5>
                <form action="" className='formProj' onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="nom">Nom</label> <br />
                            <input type="text" {...register("nom")} />
                            {errors.nom && <span>This field is required</span>}
                        </p>
                        <p>
                            <label htmlFor="prenom">Prénom</label> <br />
                            <input type="text"  {...register("prenom")} />
                        </p>
                    </div>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="numero">Numéro</label> <br />
                            <input type="text"  {...register("numero")} /> 
                        </p>
                        <p>
                            <label htmlFor="email">Email</label><br />
                            <input type="email"  {...register("email")} />
                            {errors.email && <span>This field is required</span>}
                        </p>
                    </div>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="nomProjet">Nom du projet</label>  <br />
                            <input type="text"  {...register("nomProjet")} />
                         </p>
                        <p>
                            <label htmlFor="description">Description du projet</label> <br />
                            <input type="text"  {...register("description")} /> 
                        </p>
                    </div>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="budget">Budget</label> <br />
                            <input type="text"  {...register("budget")}/>
                        </p>
                        <p>
                            <label htmlFor="">Durée du projet</label> <br />
                            <input type="text"  {...register("durerProjet")} />
                        </p>
                    </div>
                    <div className="inputFieldPr disp">
                        <p>
                            <label htmlFor="numeroTeleDecla">Numéro télédeclarant</label> <br />
                            <input type="text"  {...register("numeroTeleDecla")} /> 
                        </p>
                        <p>
                            <label htmlFor="image">Un logo du projet </label> <br />
                            <input type="file" onChange={(event)=>{
                                setValue("image", event.target.files[0])
                            }}  /> 
                        </p>
                        {errors.image && <span>This field is required</span>}
                    </div>
                    <button className='btnFournir' type="submit">Fournir votre projet</button>
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