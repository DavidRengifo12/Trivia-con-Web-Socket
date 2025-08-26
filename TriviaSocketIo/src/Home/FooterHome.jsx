import React from 'react'
import './styles/StyleFooterHome.css'
import imgFooter from './img/triviaOrginal11.jpg'


export default function FooterHome() {
  return (
    <>
    <footer className="bg-yellow-400 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/2 p-4 md:p-8 relative min-h-[400px] md:min-h-0 bg-gray-900 overflow-hidden">
  <img src={imgFooter} alt="imagen footer" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.8 }} />
  <div className="absolute inset-0 bg-green-900 opacity-20"></div>
  {/* Las etiquetas de los nombres podrían superponerse aquí si es necesario */}
  </div>
 


        <div className="w-full md:w-1/2 p-6 md:p-12 text-center flex flex-col items-center justify-center">
 
          <h3 className="text-xl md:text-2xl font-bold mb-4">ESCUCHA NUESTRA MÚSICA EN:</h3>
          <div className="flex items-center space-x-6 mb-8">
            <a href="#" className="flex items-center">
              <img src="/path-to-spotify-icon.svg" alt="Spotify" className="w-8 h-8 md:w-10 md:h-10"/>
            </a>
            <a href="#" className="flex items-center">
              <img src="/path-to-amazon-music-icon.svg" alt="Amazon Music" className="w-8 h-8 md:w-10 md:h-10"/>
            </a>
            <a href="#" className="flex items-center">
              <img src="/path-to-youtube-icon.svg" alt="YouTube" className="w-8 h-8 md:w-10 md:h-10"/>
            </a>
            <a href="#" className="flex items-center">
              <img src="/path-to-apple-music-icon.svg" alt="Apple Music" className="w-8 h-8 md:w-10 md:h-10"/>
            </a>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">SÍGUENOS EN</h3>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a href="https://instagram.com/montesantooficial" className="text-blue-900 hover:text-blue-700">
              <img src="/path-to-instagram-icon.svg" alt="Instagram" className="w-10 h-10"/>
            </a>
            <a href="https://facebook.com/montesantooficial" className="text-blue-900 hover:text-blue-700">
              <img src="/path-to-facebook-icon.svg" alt="Facebook" className="w-10 h-10"/>
            </a>
            <a href="https://tiktok.com/@montesantooficial" className="text-blue-900 hover:text-blue-700">
              <img src="/path-to-tiktok-icon.svg" alt="TikTok" className="w-10 h-10"/>
            </a>
            <span className="text-blue-900 text-lg md:text-xl font-semibold">MONTESANTOOFICIAL</span>
          </div>


          <div className="flex items-center justify-center space-x-2 my-6">
            <img src="/path-to-avatar-1.jpg" alt="Avatar 1" className="w-12 h-12 rounded-full border-4 border-white"/>
            <img src="/path-to-avatar-2.jpg" alt="Avatar 2" className="w-12 h-12 rounded-full border-4 border-white"/>
            <img src="/path-to-avatar-3.jpg" alt="Avatar 3" className="w-12 h-12 rounded-full border-4 border-white"/>
            <img src="/path-to-avatar-4.jpg" alt="Avatar 4" className="w-12 h-12 rounded-full border-4 border-white"/>
            <img src="/path-to-avatar-5.jpg" alt="Avatar 5" className="w-12 h-12 rounded-full border-4 border-white"/>
          </div>

          <p className="text-lg md:text-xl font-semibold mb-4">SÉ PARTE DEL GRUPO "MIS AMIGOS❤️"</p>
          <a href="#" className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition-colors">
            UNIRME AHORA
          </a>
        </div>
      </div>
    </footer>
     <div className="footer-bottom-home">
          <p className='p-home'>&copy; 2024 Atrapame a Goku si Puedes. Todos los Derechos Reservados.</p>
    </div>
    </>
  )
}
