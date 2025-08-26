import { useState } from "react";
import socket from "../../../src/socket";

export default function CreateSala({ setRoom }) {
  const [rounds, setRounds] = useState(1);
  const [maxPlayers, setMaxPlayers] = useState(4);
  const [questions, setQuestions] = useState([
    { question: "", answers: ["", "", "", ""], correct: 0 },
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", answers: ["", "", "", ""], correct: 0 },
    ]);
  };

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

  const handleCreate = () => {
    socket.emit(
      "moderator:create_room",
      { rounds, maxPlayers, questions },
      (res) => {
        if (res.error) return alert(res.error);
        setRoom({ code: res.code, rounds, maxPlayers, questions });
      }
    );
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-center">
        Creación de la Sala TriviaQuest
      </h2>

      <label className="block mb-2">Tiempo Limite</label>
      <input
        type="number"
        min={1}
        value={rounds}
        onChange={(e) => setRounds(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2">Cantidad de Jugadores Sala</label>
      <input
        type="number"
        min={2}
        value={maxPlayers}
        onChange={(e) => setMaxPlayers(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Sección de Preguntas */}
      <h3 className="text-lg font-semibold mb-2">Preguntas</h3>
      {questions.map((q, qi) => (
        <div key={qi} className="border p-4 rounded mb-4 bg-gray-50">
          <input
            type="text"
            placeholder={`Pregunta ${qi + 1}`}
            value={q.question}
            onChange={(e) => handleChangeQuestion(qi, e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <div className="grid grid-cols-2 gap-2">
            {q.answers.map((a, ai) => (
              <div key={ai} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Respuesta ${ai + 1}`}
                  value={a}
                  onChange={(e) =>
                    handleChangeAnswer(qi, ai, e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  type="radio"
                  name={`correct-${qi}`}
                  checked={q.correct === ai}
                  onChange={() => handleCorrectAnswer(qi, ai)}
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Marca con el radio la respuesta correcta
          </p>
        </div>
      ))}

      <button
        onClick={handleAddQuestion}
        className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-violet-600 mb-4 hover:cursor-pointer"
      >
         Añadir Pregunta
      </button>

      <button
        onClick={handleCreate}
        className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-violet-600  hover:cursor-pointer "
      >
        Crear Sala
      </button>
    </div>
  );
}
