import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './component/navBar'
import Accueil from './component/Accueil'
function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/navbar' element={<NavBar/>} />
    </Routes>
    
    </>
  )
}

export default App
