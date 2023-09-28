import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import urlApi from './url.js';
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
        <h6>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aspernatur sint culpa velit ipsa? Repellat magnam ad illum veniam!
             Dolorem aliquam animi ex quod doloribus eum libero deleniti obcaecati nihil.
        </h6>
        </>
    )
    
}
export default HistoFinace