/*import { IoHomeOutline, IoCreate } from "react-icons/io5";
import { PiRanking, PiUsersFour } from "react-icons/pi";

export default function Sidebar({sidebar}) {
  return (
    <>
      <div className={sidebar? "sidebar sidebar--open":"sidebar"}>
        
        <li className='li-sidebar'><IoHomeOutline /> Dashboard</li>
        <li className='li-sidebar'><IoCreate /> Crear Sala</li>
        <li className='li-sidebar'><PiUsersFour /> Users</li>
        <li className='li-sidebar'><PiRanking />Rankings</li>


      </div> ERRORS PRESENTADOS
    </>
  )
}*/

import React from 'react'
import { IoHomeOutline, IoCreate } from "react-icons/io5";
import { PiRanking, PiUsersFour } from "react-icons/pi";

export default function Sidebar({ sidebar, setContenidoActual, closeSidebar }) {

  const handleClick= (contenido) => {
    setContenidoActual(contenido);
    closeSidebar();

  }
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li className='li-sidebar' onClick={() => setContenidoActual("dashboard")}>
        <IoHomeOutline /> Dashboard
      </li>
      <li className='li-sidebar' onClick={() => handleClick("createsala")}>
        <IoCreate /> Crear Sala
      </li>
      <li className='li-sidebar' onClick={() => handleClick("rankings")}>
        <PiRanking /> Rankings
      </li>
      <li className='li-sidebar' onClick={() => setContenidoActual("users")}>
        <PiUsersFour /> Users
      </li>

      <li className='li-sidebar' onClick={() => handleClick('createroom')}>
        <IoCreate /> Crear Room
      </li>
    </div>
  )
}

