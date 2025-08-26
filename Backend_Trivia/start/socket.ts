/* eslint-disable prettier/prettier */
/*import { Server as IOServer } from 'socket.io'
import  Server  from '@adonisjs/core/services/server'
import room_manager from '../app/services/room_manager.js'

const io = new IOServer(Server.getNodeServer(), { cors: { origin: '*' } })

const manager = new room_manager(io)

io.on('connection', (socket) => {
  manager.bindSocket(socket)
})

export { io }*/


/* eslint-disable prettier/prettier */
import { Server as IOServer } from 'socket.io'
import server from '@adonisjs/core/services/server'
import RoomManager from '../app/services/room_manager.js'

// 👇 importante: aquí usamos server.getNodeServer()
const io = new IOServer(server.getNodeServer(), {
  cors: { origin: '*' }
})

const manager = new RoomManager(io)

io.on('connection', (socket) => {
  manager.bindSocket(socket)
})

export { io }

