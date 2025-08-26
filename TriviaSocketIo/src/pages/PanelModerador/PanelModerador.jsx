import { useState } from 'react'
import ToolBar from './ToolBar'
import Sidebar from './Sidebar'
import Backdrop from './Backdrop'
import Rankings from '../Rankings/Rankings'
import CreateSala from '../CrearSala/CreateSala'
import CreateRoom from '../CreateRoom/CreateRoom'

export default function PanelModerador() {

    const[sidebar, setSidebar] = useState(false)
    const [contenidoActual, setContenidoActual] = useState('')

    const toggleSidebar = () =>{
        setSidebar((prevState) => !prevState)
    }

    const closeSidebar = () => {
      setSidebar(false);
    }

  return (
    <>
      <ToolBar openSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar} setContenidoActual={setContenidoActual} 
      closeSidebar={closeSidebar}
      />


      <div>
        {contenidoActual === 'createsala' && <CreateSala/>}
        {contenidoActual === 'rankings' && <Rankings />}
        {contenidoActual === 'UnirseSala' && <h1>Unirse a Sala</h1>}
        {contenidoActual === 'createroom' && <CreateRoom />}
      </div>
    </>
  )
}
