import NavBar from "./navBar"
import Body from "./body"
import Footer from "./footer"

function Accueil() {
    return (
        <>
            <NavBar service={"#service"}  contact={"#contact"} />
            <Body />
            <Footer />
        </>
    )
    
}
export default Accueil