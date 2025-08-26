import { useState } from "react";


export default function CreateRoom() {
  const [rounds, setRounds] = useState(0);

  

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

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div className="bg-violet-500 shadow-2xl rounded-2xl w-full max-w-md p-6">
  
        <p className="text-sm text-black mb-4">Código de sala: <span className="font-mono text-cyan-400">P7O17V</span></p>

        <h3 className="text-md font-semibold mb-2">📘 Preguntas</h3>
        <button
          onClick={handleAddQuestion}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 px-3 py-2 rounded text-sm mb-4"
        >
          Nueva pregunta
        </button>

 
        {questions.map((q, qi) => (
          <div key={qi} className="bg-gray-700 rounded-xl p-4 mb-4">
            <input
              type="text"
              placeholder="Texto de la pregunta"
              value={q.question}
              onChange={(e) => handleChangeQuestion(qi, e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 mb-3 text-white"
            />
            <div className="space-y-2">
              {q.answers.map((a, ai) => (
                <div key={ai} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={`Opción ${ai + 1}`}
                    value={a}
                    onChange={(e) =>
                      handleChangeAnswer(qi, ai, e.target.value)
                    }
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
                  />
                  <label className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name={`correct-${qi}`}
                      checked={q.correct === ai}
                      onChange={() => handleCorrectAnswer(qi, ai)}
                      className="bg-cyan-500"
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
            min={1}
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
            className="w-20 p-2 rounded bg-gray-800 border border-gray-600 text-white"
          />
          <span className="text-sm text-black">Segundos por ronda</span>
        </div>

        <h3 className="text-md font-semibold mb-2">Juego</h3>
        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-cyan-500 hover:bg-white py-2 rounded-lg text-sm hover:text-black">
            Enviar preguntas al servidor
          </button>
          <button className="flex-1 bg-green-600 hover:bg-green-500 py-2 rounded-lg text-sm">
            Iniciar trivia
          </button>
        </div>

        <h3 className="text-md font-semibold mb-2"> Marcador</h3>
        <p className="text-black text-sm">Aún no hay jugadores...</p>
      </div>
    </div>
  );
}
