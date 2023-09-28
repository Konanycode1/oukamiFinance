import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import {  BsClockHistory } from "react-icons/bs";
import'../component/css/profil.css'
import {urlApi} from './url.js';

// const urlApi = "http://localhost:3000/api/"


function HistoFinace() {
    let keyUser = JSON.parse( sessionStorage.getItem('keyUser'))
    console.log( "key: ",keyUser)
    
         
     const {data} = useQuery({
        
                    queryKey: ['listeProjet'],
                    queryFn: async ()=>{
                       console.log('ok')
                       
                        const response = await axios.get(`${urlApi}/projetFinance/${keyUser}`)
                        return response
                    }
                })
             console.log(data)
    return (
        <>
        {
            data?.data.message.map((ele)=>{
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div className="histoBloc">
                    <BsClockHistory />
                    <p className="descrFinan lintDes">{ele.description}</p>
                    <p className="descrFinan">{ele.nomProjet}</p>
               </div>
                )
            })
        }
      
        </>
    )
    
}
export default HistoFinace