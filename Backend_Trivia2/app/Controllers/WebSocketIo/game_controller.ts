/* eslint-disable prettier/prettier */
/*import { Ws } from '../../../app/Types/Ws.js'
import room_manager from '../../../app/services/room_manager.js'


Ws.io.on('connection', (socket) => {
  socket.on('createRoom', ({ code }) => {
    const room = room_manager.createRoom(code, socket.id)
    socket.join(code)
    socket.emit('roomCreated', room)
  })

  socket.on('joinRoom', ({ code, nickname }) => {
    const room = room_manager.getRoom(code)
    if (!room) return socket.emit('error', 'Room not found')

    if (room.nicknames.has(nickname)) {
      return socket.emit('error', 'Nickname already taken')
    }

    room.players.set(socket.id, {
      id: socket.id,
      nickname,
      score: 0,
      answered: false
    })
    room.nicknames.add(nickname)
    socket.join(code)

    Ws.io.to(code).emit('playerJoined', Array.from(room.players.values()))
  })
})*/