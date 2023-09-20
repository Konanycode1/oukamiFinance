import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './component/navBar'
import Accueil from './component/Accueil'
import Sign from './component/sign'
import Login from './component/login'
import Forgot from './component/forgot'
import AjoutProjet from './component/AjoutProjet'
import VoirFinance from './component/voirFinance'
function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/navbar' element={<NavBar/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sign' element={<Sign/>} />
        <Route path='/forgot' element={<Forgot/>} />
        <Route path='/ajout' element={<AjoutProjet/>} />
        <Route path='/Voir' element={<VoirFinance/>} />
    </Routes>
    
    </>
  )
}

export default App
