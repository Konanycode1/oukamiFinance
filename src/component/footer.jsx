import { BsFacebook, BsInstagram,BsTwitter } from "react-icons/bs";


function Footer() {
    return (
    <>
        <footer>
            <div className="foot">
                <div className="">
                    <h6 >OukaFinance©copyRigth 2023</h6>
                </div>
               
                <div className="reseauSocial">
                    <BsFacebook className="socio" />
                    <BsInstagram className="socio" />
                    <BsTwitter className="socio" />
                </div>
            </div>
        </footer>
    </>
    )
    
}
export default Footer