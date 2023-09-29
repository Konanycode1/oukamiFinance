import { useQuery } from "@tanstack/react-query"
import axios from "axios"
// const urlApi = "http://localhost:3000/api/"
import {BiNetworkChart } from "react-icons/bi";
import {urlApi} from './url.js';
function ListeFinance(){
    let keyUser = JSON.parse( sessionStorage.getItem('keyUser'))
    console.log( "key: ",keyUser)
    
         
     const {data} = useQuery({
        
                    queryKey: ['listeProjet'],
                    queryFn: async ()=>{
                       console.log('ok')
                       
                        const response = await axios.get(`${urlApi}projetFinance/${keyUser}`)
                        return response
                    }
                })
             console.log(data)
    
        
  return (
    <>
        {
        data?.data.message.map((item)=>{
            return(
                // eslint-disable-next-line react/jsx-key
                <div className="listenPro" key={item._id}>
                    <BiNetworkChart className="icoPojetFi"/>
                    <h5>{item.nomProjet}</h5>
                    <p className='encoProj'>encours de financement</p>
                </div>
            )
        })
        }
    </>
  )

}
export default ListeFinance