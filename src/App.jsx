import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './component/navBar'
import Accueil from './component/Accueil'
import Sign from './component/sign'
import Login from './component/login'
import Forgot from './component/forgot'
import AjoutProjet from './component/AjoutProjet'
import VoirFinance from './component/voirFinance'
import ProfilBailleur from './component/ProfilBailleur'
import ListeProjet from './component/ListeProjet'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import reactQueryDevTools from "@tanstack/react-query/"
import { useRef } from 'react'
import ListeFinance from './conso/listeFinance'
function App() {
  let client = useRef(new QueryClient()) ;

  return (
    <>
<QueryClientProvider client={client.current}>
<ToastContainer  
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light" />
  <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/navbar' element={<NavBar/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sign' element={<Sign/>} />
        <Route path='/forgot' element={<Forgot/>} />
        <Route path='/ajout' element={<AjoutProjet/>} />
        <Route path='/Voir' element={<VoirFinance/>} />
        <Route path='/profil' element={<ProfilBailleur />} />
        <Route path='/liste' element={<ListeProjet />} />
        <Route path='/finace' element={<ListeFinance />} />
    </Routes>
</QueryClientProvider>
   
    
    </>
  )
}

export default App
