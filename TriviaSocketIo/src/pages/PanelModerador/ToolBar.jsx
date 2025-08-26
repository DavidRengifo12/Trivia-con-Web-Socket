import './styles/StylesToolBar.css'
import { IoMenuSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

export default function ToolBar({openSidebar}) {
  const state = useLocation()
  const moderador = state?.state?.moderador || "Invitado"

  return (
    <>
      <div className="tool-bar">
        <div className="burger" onClick={openSidebar}>
            <IoMenuSharp />
        </div>
        <div className="title">Moderador : {moderador}</div>

      </div>
    </>
  )
}
