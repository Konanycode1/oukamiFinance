import logo from '/logo.jpg'
import '../App.css'
import {useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavBar({service,contact}) {
    let location = useLocation();
    let {pathname} = location;
    console.log(pathname)
    const splitpath = pathname.split("/")
    console.log(splitpath)
    return (
        <>
            <nav className='navBar'>
                <img className='logo' src={logo} alt="" />
                    <ul className='menu'>
                        <li className={splitpath[1] === "" ? "active" : ""} ><a href='/'>Accueil</a> </li>
                        <li className={splitpath[1] === "#service" ? "active" : ""}><a  href={service}> OukaService</a></li>
                        <li className={splitpath[1] === "voir" ? "active" : ""}><a href='/voir'>OukaFinance</a></li>
                        <li className={splitpath[1] === "#contact" ? "active" : ""}><a href={contact} >OukaContact</a></li>
                    </ul>
                    <p className='tel'>Tel : 22 252 233 45</p>
            </nav>
        </>
    )
    
}

export default NavBar