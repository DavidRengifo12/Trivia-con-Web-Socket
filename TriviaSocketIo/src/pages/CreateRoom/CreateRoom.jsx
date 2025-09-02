import { useState, useEffect } from "react";
import socket from "../../socket";
import './styles/createroom.css'

export default function CreateRoom() {
  const [roomCode, setRoomCode] = useState("");
  const [rounds, setRounds] = useState(20);
  const [questions, setQuestions] = useState([
    { question: "", answers: ["", "", "", ""], correct: 0 }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Conexión inicial del socket
  useEffect(() => {
    console.log("Socket conectado:", socket.connected);

    // Escuchar cuando termina la ronda
    socket.on('round:ended', () => {
      if (currentQuestionIndex + 1 < questions.length) {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        startQuestion(nextIndex); // dispara la siguiente pregunta
      } else {
        alert(" Trivia finalizada");
      }
    });

    return () => {
      socket.off('round:ended');
    }
  }, [currentQuestionIndex, questions]);

  // Función para crear sala en backend
  const handleSendToServer = () => {
    socket.emit("moderator:create_room", {}, (res) => {
      if (res.error) return alert(res.error);
      setRoomCode(res.code);
      alert(` Sala ${res.code} creada`);
    });
  };

  // Función para disparar una pregunta según índice
  const startQuestion = (index) => {
    const q = questions[index];
    socket.emit("moderator:start_question", {
      code: roomCode,
      text: q.question,
      answers: q.answers,
      correctAnswer: q.answers[q.correct],
      durationSec: rounds,
    });
  };

  // Función para iniciar trivia desde el botón
  const handleStartTrivia = () => {
    if (!roomCode) return alert("Crea primero la sala");
    setCurrentQuestionIndex(0); // iniciar desde la primera pregunta
    startQuestion(0);
  };

  // Funciones para manejar preguntas y respuestas
  const handleAddQuestion = () => setQuestions([...questions, { question: "", answers: ["", "", "", ""], correct: 0 }]);
  const handleChangeQuestion = (i, value) => {
    const updated = [...questions];
    updated[i].question = value;
    setQuestions(updated);
  };
  const handleChangeAnswer = (qi, ai, value) => {
    const updated = [...questions];
    updated[qi].answers[ai] = value;
    setQuestions(updated);
  };
  const handleCorrectAnswer = (qi, ai) => {
    const updated = [...questions];
    updated[qi].correct = ai;
    setQuestions(updated);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 img-fondo3">
      <div className="bg-gray-400/80 shadow-2xl rounded-2xl w-full max-w-md p-6">
        <h3 className="text-md font-semibold mb-2"> Crear Sala</h3>

        <input
          type="text"
          placeholder="Código de la sala"
          value={roomCode || 'Esperando Code Sala'}
          readOnly
          className="w-full p-2 mb-4 rounded bg-teal-600 border border-gray-600 text-white"
        />

        <h3 className="text-md font-semibold mb-2">Preguntas</h3>
        {questions.map((q, qi) => (
          <div key={qi} className="bg-gray-700/70 rounded-xl p-4 mb-4">
            <input
              type="text"
              placeholder="Texto de la pregunta"
              value={q.question}
              onChange={(e) => handleChangeQuestion(qi, e.target.value)}
              className="w-full p-2 rounded bg-teal-700 border border-gray-600 mb-3 text-white"
            />
            <div className="space-y-2">
              {q.answers.map((a, ai) => (
                <div key={ai} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={`Opción ${ai + 1}`}
                    value={a}
                    onChange={(e) => handleChangeAnswer(qi, ai, e.target.value)}
                    className="w-full p-2 rounded bg-gray-300/70 border border-gray-600 text-black"
                  />
                  <label className="flex items-center gap-1 text-sm text-white">
                    <input
                      type="radio"
                      name={`correct-${qi}`}
                      checked={q.correct === ai}
                      onChange={() => handleCorrectAnswer(qi, ai)}
                      className="bg-teal-700"
                    />
                    Correcta
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            min={5}
            value={rounds}
            onChange={(e) => setRounds(Number(e.target.value))}
            className="w-20 p-2 rounded bg-teal-600 border border-gray-600 text-white"
          />
          <span className="text-sm text-black font-semibold">Segundos por ronda</span>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={handleSendToServer}
            className="flex-1 bg-teal-700 text-white hover:bg-white hover:text-teal-700 cursor-pointer py-2 rounded-lg text-sm "
          >
            Crear sala
          </button>
          <button
            onClick={handleStartTrivia}
            className="flex-1 bg-teal-700 text-white hover:bg-green-500 cursor-pointer py-2 rounded-lg text-sm"
          >
            Iniciar trivia
          </button>
        </div>

        <button
          onClick={handleAddQuestion}
          className="flex items-center gap-2 bg-cyan-600 text-white hover:bg-cyan-500 cursor-pointer px-3 py-2 rounded text-sm mb-4"
        >
          Nueva pregunta
        </button>
      </div>
    </div>
  );
}
