/* eslint-disable prettier/prettier */
export type RoomCode = string

export interface Player {
  id: string
  nickname: string
  score: number
  answered: boolean
}

export interface Question {
  id: string
  text: string
  correctAnswer: string
  options: string[] //Agregue aqui las ocpiones de respuesta
}

export interface PlayerAnswer {
  playerId: string
  answer: string
  timeMs: number
  isCorrect: boolean
}

export interface Round {
  id: string
  question: Question
  endsAt: number
  isOpen: boolean
  answers: Map<string, PlayerAnswer>
}

export interface Room {
  code: RoomCode
  moderatorId: string | null
  status: 'lobby' | 'playing' | 'ended'
  players: Map<string, Player>
  nicknames: Set<string>
  currentRound?: Round
  history: Round[]
  tickInterval?: NodeJS.Timeout
}