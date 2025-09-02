import React from 'react'
import './styles/StyleFooterHome.css'
import imgFooter from './img/fonodtrivihome.webp'
import imgMessi from './img/messi.webp'
import imgCr7 from './img/cr7.jpg'

import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { AiFillAmazonCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaAppleAlt } from "react-icons/fa";


export default function FooterHome() {
  return (
    <>
    <footer className="bg-neutral-300 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/2 p-4 md:p-8 relative min-h-[700px]  bg-gray-900 overflow-hidden ">
  <img src={imgFooter} alt="imagen footer" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.8 }} />


  </div>
 


        <div className="w-full md:w-1/2 p-6 md:p-12 text-center flex flex-col items-center justify-center">
 
          <h3 className="text-xl md:text-2xl font-bold mb-4">BUSCANOS EN:</h3>
          <div className="flex items-center space-x-6 mb-8">
            <a href="#" className="flex items-center text-green-400 hover:text-green-700">
              <BsSpotify className='w-8 h-8 md:w-10 md:h-10 '/>
            </a>
            <a href="#" className="flex items-center text-amber-300 hover:text-amber-500">
              <AiFillAmazonCircle className='w-8 h-8 md:w-10 md:h-10'/>
            </a>
            <a href="#" className="flex items-center text-red-500 hover:text-red-700">
              <IoLogoYoutube className='w-8 h-8 md:w-10 md:h-10'/>
            </a>
            <a href="#" className="flex items-center text-gray-500 hover:text-gray-700">
              <FaAppleAlt className='w-8 h-8 md:w-10 md:h-10'/>
            </a>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-teal-700">SÍGUENOS EN</h3>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a href="https://instagram.com/montesantooficial" className="text-red-400 hover:text-red-700">
              <FaInstagramSquare className='w-8 h-8 md:w-10 md:h-10'/>
            </a>
            <a href="https://facebook.com/montesantooficial" className="text-sky-400 hover:text-blue-700">
              <FaSquareFacebook className='w-8 h-8 md:w-10 md:h-10'/>
            </a>
            <a href="https://tiktok.com/@montesantooficial" >
              <AiFillTikTok className='w-8 h-8 md:w-10 md:h-10'/>
            </a>
            <span className="text-teal-700 text-lg md:text-xl font-semibold">TRIVIAQUESTOFICIAL</span>
          </div>


          <div className="flex items-center justify-center space-x-2 my-6">
            <img src={imgCr7} alt="Avatar 1" className="w-20 h-20 rounded-full border-4 border-white"/>
            <img src={imgMessi} alt="Avatar 2" className="w-20 h-20 rounded-full border-4 border-white"/>
            
          </div>

          <p className="text-teal-700 text-lg md:text-xl font-semibold mb-4">SÉ PARTE DE NUESTRO GRUPO</p>
          <a href="#" className="bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-teal-700 transition-colors">
            UNIRME AHORA
          </a>
        </div>
      </div>
    </footer>
     <div className="footer-bottom-home">
          <p className='p-home'>&copy; 2024 Trivia Quest. Todos los Derechos Reservados.</p>
    </div>
    </>
  )
}
