import { useState } from "react"
import './styles/StyleHeaderHome.css'
//import  imagenlogo from "./img/logodbz.png"

export default function HeaderHome() {


    const [menuDesplegado, setMenuDesplegado] = useState(false)

    const cambiarEstadoMenu = () => {
        setMenuDesplegado(!menuDesplegado)
    }

    return (
    
        <header className="site-header-home">
        
            <div className="container-home ">
                <div className="header-wrapper-home">
                        {/*<img src={imagenlogo} alt="" width={200} height={200}  className="imagen-logo"/>*/}
                        <p className="nav-menu-home">TRIVIAQUEST</p>
                    
                    
                    
                    <nav className="main-nav-home">
                        <button className={`menu-toggle-home ${menuDesplegado ? "active": ""} ` } id="menuToggle" onClick={cambiarEstadoMenu} aria-expanded={!menuDesplegado ? "true" : "false"}>
                            <span className="bar-home"></span>
                            <span className="bar-home"></span>
                            <span className="bar-home"></span>
                        </button>
                        
                        <ul className={`ul-home nav-menu-home ${menuDesplegado ? "active": ""} ` } id="navMenu">
                            <li className="li-home"><a href="#home" onClick={cambiarEstadoMenu} className="active a-home">INICIO</a></li>
                            <li className="li-home"><a href="#instrucciones" onClick={cambiarEstadoMenu} className="a-home">INSTRUCCIONES</a></li>
                            <li className="li-home"><a href="#" onClick={cambiarEstadoMenu} className="a-home">REGLAS</a></li>
                            <li className="li-home"><a href="#contacto" onClick={cambiarEstadoMenu} className="a-home">CONTACTO</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        
    )
}