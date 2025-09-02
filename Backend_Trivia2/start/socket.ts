/* eslint-disable prettier/prettier */
/*import { Server as IOServer } from 'socket.io'
import server from '@adonisjs/core/services/server'
import RoomManager from '../app/services/room_manager.js'

console.log('⚡ Booting Socket.IO...')

const io = new IOServer(server.getNodeServer(), {
  cors: { origin: 'http://localhost:5173', methods: ['GET', 'POST'], esto eliminarlos methods }
})

const manager = new RoomManager(io)

io.on('connection', (socket) => {
  console.log(`Cliente conectado: ${socket.id} `)
  manager.bindSocket(socket)

  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`)
  })
})

export default { io }*/

/*import { Server as IOServer } from 'socket.io'
import { Server as HTTPServer } from 'node:http'
import RoomManager from '../app/services/room_manager.js'


export default function initSocket(httpServer: HTTPServer){
  const io = new IOServer(httpServer, {
    cors: {origin: 'http://localhost:5173'},
  })

  const manager = new RoomManager(io)

  io.on('connection', (socket) => {
    console.log(`Cliente conectado: ${socket.id} `)
    manager.bindSocket(socket)
  })

  return io
}*/

import { Server } from 'socket.io'
import app from '@adonisjs/core/services/app'
import server from '@adonisjs/core/services/server'
import logger from '@adonisjs/core/services/logger'
import RoomManager from '../app/services/room_manager.js'

app.ready(() => {
  const httpServer = server.getNodeServer() 
  
  const io = new Server(httpServer, {
    cors: {origin: 'http://localhost:5173'}, 
  })

  const manager = new RoomManager(io)

  io.on('connection', (socket) => {
    logger.info(` Cliente conectado: ${socket.id}`)

    manager.bindSocket(socket)

    socket.on('disconnect', () => {
      logger.info(` Cliente desconectado: ${socket.id}`)
    })
  })

  logger.info('⚡ Socket.IO inicializado')
})
