import { BrowserRouter, Routes, Route } from "react-router-dom"
import ComponentesHome from "./ComponentesHome"
import PanelAdmin from "./pages/PanelAdmin"
import Login from './components/Login'
import PanelModerador from "./pages/PanelModerador/PanelModerador"
import JoinRoom from "./pages/UnirseSala/JoinRoom"
import Rankings from "./pages/Rankings/Rankings"
import NombreModerador from "./pages/NameModerador/NombreModerador"
import CreateSala from "./pages/CrearSala/CreateSala"
import CreateRoom from "./pages/CreateRoom/CreateRoom"

export default function Rutas() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/*Rutas principal home */}
                <Route path="/" element={<ComponentesHome />}></Route>
                {/*Rutas por si acaso */}
                <Route path="/paneladmin" element={<PanelAdmin />} />
                <Route path="/login" element={<Login />}></Route>

                {/*Rutas del moderador  y jugador*/}
                <Route path="/panelmoderador" element={<PanelModerador />} />
                <Route path="/unirsesala" element={<JoinRoom />}/>

                {/*Rutas del juego */}
                <Route path="/namemoderador" element={<NombreModerador />} />
                <Route path="/createroom" element={<CreateRoom />}/>                
                <Route path="/createsala" element={<CreateSala />} />
                <Route path="/rankings" element={<Rankings />} />  

            </Routes>
        </BrowserRouter>      
    </>
  )
}
