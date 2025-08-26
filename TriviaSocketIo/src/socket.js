// Importa el cliente de socket.io
/*import { io } from "socket.io-client";

// Conéctate a tu backend (cambia la URL según corresponda)
const socket = io("http://localhost:3333", {
  transports: ["websocket"], // fuerza el uso de websocket
});

// Exporta para poder usarlo en tus componentes
export default socket;*/

import { io } from 'socket.io-client'

const socket = io('http://localhost:3333', {
  transports: ['websocket']
})

socket.on('connect', () => {
  console.log('Conectado con ID:', socket.id)
})


export default socket