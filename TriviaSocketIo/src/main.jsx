import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rutas from './Rutas'
import CreateRoom from './pages/CreateRoom/CreateRoom'
import PlayerView from './pages/ResponderPreguntasJugador/PlayerView'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <PlayerView />
  </StrictMode>,
)
