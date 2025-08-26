/* eslint-disable prettier/prettier */

import { Server as IOServer, Socket } from 'socket.io'
import { randomUUID } from 'node:crypto'
import type { Room, Player, RoomCode } from '../../app/types/ws.ts'

export default class RoomManager {
  private io: IOServer
  private rooms: Map<RoomCode, Room> = new Map()

  constructor(io: IOServer) {
    this.io = io
  }

  private generateCode(): RoomCode {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  }

  private emitRoomState(code: RoomCode) {
    const room = this.rooms.get(code)
    if (!room) return
    const players = Array.from(room.players.values()).map((p) => ({ nickname: p.nickname, score: p.score }))
    this.io.to(code).emit('room:state', { code, status: room.status, players })
    this.io.to(code).emit('scoreboard', { code, table: [...players].sort((a, b) => b.score - a.score) })
  }

  bindSocket(socket: Socket) {
    // Moderador crea sala
    socket.on('moderator:create_room', (_: unknown, ack?: Function) => {
      const code = this.generateCode()
      const room: Room = {
        code,
        moderatorId: socket.id,
        status: 'lobby',
        players: new Map(),
        nicknames: new Set(),
        history: [],
      }
      this.rooms.set(code, room)
      socket.join(code)
      ack?.({ code })
      this.emitRoomState(code)
    })

    // Moderador reingresa
    socket.on('moderator:join_room', ({ code }: { code: string }, ack?: Function) => {
      const room = this.rooms.get(code)
      if (!room) return ack?.({ error: 'Sala no existe' })
      room.moderatorId = socket.id
      socket.join(code)
      ack?.({ ok: true })
      this.emitRoomState(code)
    })

    // Jugador entra
    socket.on(
      'player:join_room',
      ({ code, nickname }: { code: string; nickname: string }, ack?: Function) => {
        const room = this.rooms.get(code)
        if (!room) return ack?.({ error: 'Sala no existe' })
        if (room.nicknames.has(nickname)) return ack?.({ error: 'Nickname ya usado' })

        const player: Player = { id: socket.id, nickname, score: 0, answered: false }
        room.players.set(socket.id, player)
        room.nicknames.add(nickname)
        socket.join(code)
        ack?.({ ok: true })
        this.emitRoomState(code)
      }
    )

    // Lanzar la pregunta a los juagadores
    socket.on(
      'moderator:start_question',
      (
        {
          code,
          text,
          correctAnswer,
          durationSec,
        }: { code: string; text: string; correctAnswer: string; durationSec: number },
        ack?: Function
      ) => {
        const room = this.rooms.get(code)
        if (!room) return ack?.({ error: 'Sala no existe' })
        if (room.moderatorId !== socket.id) return ack?.({ error: 'No autorizado' })

        if (room.currentRound?.isOpen) this.closeRound(room)
        room.players.forEach((p) => (p.answered = false))

        const endsAt = Date.now() + Math.max(5, durationSec || 20) * 1000
        room.currentRound = {
          id: randomUUID(),
          question: { id: randomUUID(), text, correctAnswer },
          endsAt,
          isOpen: true,
          answers: new Map(),
        }
        room.status = 'playing'

        if (room.tickInterval) clearInterval(room.tickInterval)
        room.tickInterval = setInterval(() => {
          const msLeft = Math.max(0, room.currentRound!.endsAt - Date.now())
          this.io.to(code).emit('round:tick', { code, msLeft })
          if (msLeft <= 0) this.closeRound(room)
        }, 1000)

        this.io.to(code).emit('question:started', {
          code,
          questionId: room.currentRound.id,
          text,
          endsAt,
        })
        ack?.({ ok: true })
      }
    )

    // Responder preguntas jugador
    socket.on(
      'player:answer',
      ({ code, answer }: { code: string; answer: string }, ack?: Function) => {
        const room = this.rooms.get(code)
        if (!room || !room.currentRound || !room.currentRound.isOpen) return ack?.({ error: 'Ronda cerrada' })
        const player = room.players.get(socket.id)
        if (!player) return ack?.({ error: 'Jugador no está en sala' })
        if (player.answered) return ack?.({ error: 'Ya respondiste' })

        player.answered = true
        const timeMs = Math.max(0, room.currentRound.endsAt - Date.now())
        const isCorrect =
          String(answer).trim().toLowerCase() ===
          room.currentRound.question.correctAnswer.trim().toLowerCase()

        room.currentRound.answers.set(player.id, {
          playerId: player.id,
          answer,
          timeMs,
          isCorrect,
        })

        ack?.({ ok: true })
      }
    )

    // Cerrar ronda por moderador
    socket.on('moderator:close_round', ({ code }: { code: string }, ack?: Function) => {
      const room = this.rooms.get(code)
      if (!room) return ack?.({ error: 'Sala no existe' })
      if (room.moderatorId !== socket.id) return ack?.({ error: 'No autorizado' })
      this.closeRound(room)
      ack?.({ ok: true })
    })

    // Finalizar el juego
    socket.on('moderator:end_game', ({ code }: { code: string }, ack?: Function) => {
      const room = this.rooms.get(code)
      if (!room) return ack?.({ error: 'Sala no existe' })
      if (room.moderatorId !== socket.id) return ack?.({ error: 'No autorizado' })
      room.status = 'ended'
      if (room.tickInterval) clearInterval(room.tickInterval)
      this.emitRoomState(code)
      ack?.({ ok: true })
    })

    // Desconexion de algun jugador
    socket.on('disconnect', () => {
      for (const [code, room] of this.rooms) {
        if (room.players.has(socket.id)) {
          const p = room.players.get(socket.id)!
          room.players.delete(socket.id)
          room.nicknames.delete(p.nickname)
          this.emitRoomState(code)
        }
        if (room.moderatorId === socket.id) {
          room.moderatorId = null
        }
      }
    })
  }

  private closeRound(room: Room) {
    if (!room.currentRound || !room.currentRound.isOpen) return
    room.currentRound.isOpen = false
    if (room.tickInterval) clearInterval(room.tickInterval)

    const perPlayer: { nickname: string; isCorrect: boolean; timeMs: number; delta: number }[] = []

    room.players.forEach((player) => {
      const ans = room.currentRound!.answers.get(player.id)
      if (!ans) {
        perPlayer.push({ nickname: player.nickname, isCorrect: false, timeMs: 0, delta: 0 })
        return
      }
      let delta = 0
      if (ans.isCorrect) {
        const base = 100
        const bonus = Math.floor(ans.timeMs / 200) // 1 punto cada 200ms restantes
        delta = base + bonus
        player.score += delta
      }
      perPlayer.push({
        nickname: player.nickname,
        isCorrect: ans.isCorrect,
        timeMs: ans.timeMs,
        delta,
      })
    })

    const code = room.code
    this.io.to(code).emit('round:ended', {
      code,
      correctAnswer: room.currentRound.question.correctAnswer,
      perPlayer,
    })

    room.history.push(room.currentRound)
    room.currentRound = undefined
    room.status = 'lobby'
    this.emitRoomState(code)
  }
}