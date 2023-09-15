import logo from '/logo.jpg'
import '../App.css'
function NavBar() {

    return (
        <>
            <nav className='navBar'>
                <img className='logo' src={logo} alt="" />
                    <ul className='menu'>
                        <li><a href="">Accueil</a> </li>
                        <li><a href=""> OukaService</a></li>
                        <li><a href="">OukaFinance</a></li>
                        <li><a href="">OukaContact</a></li>
                    </ul>
                    <p className='tel'>Tel : 22 252 233 45</p>
            </nav>
        </>
    )
    
}

export default NavBar