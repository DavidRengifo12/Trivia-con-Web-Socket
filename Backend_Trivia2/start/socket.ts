/* eslint-disable prettier/prettier */
import { Server as IOServer } from 'socket.io'
import server from '@adonisjs/core/services/server'
import RoomManager from '../app/services/room_manager.js'

const io = new IOServer(server.getNodeServer(), {
  cors: { origin: '*' }
})

const manager = new RoomManager(io)

io.on('connection', (socket) => {
  manager.bindSocket(socket)
})

export { io }