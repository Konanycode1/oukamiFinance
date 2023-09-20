import './css/voir.css'
import NavBar from "./navBar"
import Footer from './footer';
import all from '../assets/A.png';
import wassa from '../assets/wassa.png';
import esuan from '../assets/esuan.png';
import Kvivri from '../assets/K-vivri.png';
import QuickBank from '../assets/logo.png';
function VoirFinance() {
    return(
        <>
        <NavBar />
        <div className="VoirFinance">
            <div className="caroul">
                <h3>Oukami Finance</h3>
            </div>
            <div className="blocVoirFinan">
                <div className="carVoir">
                    <img src={all} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Encours</p>
                        <h5>All Streaming</h5>
                        <p>All Streaming une plateforme de streaming typiquement africain valorisant la culture africaine ....</p>
                        <div className="bVoir1">
                            <p>Date d&apos;ajout: <span>07/08/2023</span></p>
                            <p className='staus'>status: True</p>
                        </div>
                    </div>
                </div>
                <div className="carVoir">
                    <img src={wassa} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Encours</p>
                        <h5>Wassa Wassa</h5>
                        <p>Ce projet vise à facilité les échange commerciaux dans des région</p>
                        <div className="bVoir1">
                            <p>Date d&apos;ajout: <span>07/08/2023</span></p>
                            <p className='falseStatus'>status: False</p>
                        </div>
                    </div>
                </div>
                <div className="carVoir">
                    <img src={esuan} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Finance</p>
                        <h5>Esuan School</h5>
                        <p>Permet aux passionnés de la langue locale ivoirienne d&apos;apprendre  </p>
                        <div className="bVoir1">
                            <p>Date d&apos;ajout: <span>07/08/2023</span></p>
                            <p className=' falseStatus'>status: False</p>
                        </div>
                    </div>
                </div>
                <div className="carVoir">
                    <img src={Kvivri} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Encours</p>
                        <h5>K-vivri</h5>
                        <p>Plateforme de gestion d&apos;entreprise agricole  </p>
                        <div className="bVoir1">
                            <p>Date d&apos;ajout: <span>07/08/2023</span></p>
                            <p className='staus'>status: True</p>
                        </div>
                    </div>
                </div>
                <div className="carVoir">
                    <img src={ QuickBank} alt=""  />
                    <div className="infoProj">
                        <p className='encours'>Encours</p>
                        <h5>QUICK BANK</h5>
                        <p>Une banque en ligne facilitant les echanges avec les autres banque et les différents service de mobile money </p>
                        <div className="bVoir1">
                            <p>Date d&apos;ajout: <span>07/08/2023</span></p>
                            <p className='staus'>status: True</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
    
}
export default VoirFinance