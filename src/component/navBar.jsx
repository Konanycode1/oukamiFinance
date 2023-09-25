import logo from '/logo.jpg'
import '../App.css'
import {useLocation } from 'react-router-dom';
import { BiHomeCircle,BiMoney,BiSolidContact,BiTrim } from "react-icons/bi";



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
            <nav className='navBarScreen'>
                <img className='logo' src={logo} alt="" />
                    <ul className='menuMobil'>
                        <li className={splitpath[1] === "" ? "active" : ""} ><a href='/'><BiHomeCircle /></a> </li>
                        <li className={splitpath[1] === "#service" ? "active" : ""}><a  href={service}> <BiTrim /></a></li>
                        <li className={splitpath[1] === "voir" ? "active" : ""}><a href='/voir'><BiMoney/></a></li>
                        <li className={splitpath[1] === "#contact" ? "active" : ""}><a href={contact} ><BiSolidContact/></a></li>
                    </ul>
                   
            </nav>
        </>
    )
    
}

export default NavBar