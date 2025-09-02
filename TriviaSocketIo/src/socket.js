import { io } from 'socket.io-client'

const socket = io('http://localhost:3333', {
  transports: ['websocket'],
})

socket.on('connect', () => {
  console.log('Conectado con ID:', socket.id)
})

socket.on('connect_error', (err) => {
  console.error('Error de conexión:', err.message)
})


export default socket