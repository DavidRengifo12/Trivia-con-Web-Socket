import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import socket from "../../socket";

export default function PlayerView() {
  const location = useLocation();
  const roomCode = location.state?.roomCode;
  const [question, setQuestion] = useState(null);
  const [players, setPlayers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setQuestion(null)
    setPlayers([])
    setTimeLeft(0)
    setSelected(null)
    if (!roomCode) return;


    socket.emit("player:join_room", { code: roomCode}, (res) => {
      if (res.error) console.warn(res.error);
    });

    // Evento de nueva pregunta
    socket.on("question:started", ({ code, text, answers, endsAt }) => {
      if (code !== roomCode) return;
      setQuestion({ text, answers: answers || [], endsAt });
      setTimeLeft(Math.floor((endsAt - Date.now()) / 1000));
      setSelected(null);
    });

    // Evento de tick del tiempo
    socket.on("round:tick", ({ code, msLeft }) => {
      if (code !== roomCode) return;
      setTimeLeft(Math.ceil(msLeft / 1000));
    });

    // Actualización del estado de la sala y marcador
    socket.on("scoreboard", ({ code, table }) => {
      if (code !== roomCode) return;
      setPlayers(table);
    });

    // Cuando termina la ronda
    socket.on("round:ended", ({ code }) => {
      if (code !== roomCode) return;
      setQuestion(null);
    });

    return () => {
      socket.off("question:started");
      socket.off("round:tick");
      socket.off("scoreboard");
      socket.off("round:ended");
    };
  }, [roomCode]);

  const sendAnswer = (index) => {
    if (!question || selected !== null) return;
    setSelected(index);
    socket.emit("player:answer", {
      code: roomCode,
      answer: question.answers[index],
    });
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div className="flex w-full max-w-5xl gap-6">
        {/* Panel jugador y marcador */}
        <div className="bg-gray-800 shadow-lg rounded-2xl p-6 w-64">
          <h2 className="text-lg font-bold mb-2">Jugador</h2>
          <p className="text-sm text-gray-400 mb-1">
            Sala: <span className="font-mono text-cyan-400">{roomCode}</span>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Tiempo restante: {timeLeft}s
          </p>
          <h3 className="text-md font-semibold mb-2">Marcador</h3>
          <ul className="list-disc list-inside text-sm text-gray-300">
            {players.length === 0 ? (
              <li className="text-gray-500">Aún no hay jugadores...</li>
            ) : (
              players.map((p) => (
                <li key={p.nickname} className="text-cyan-400">
                  {p.nickname}: {p.score}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Panel preguntas */}
        <div className="flex-1 bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center">
          {question ? (
            <>
              <h2 className="text-xl font-bold mb-6">{question.text}</h2>
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                {question.answers.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => sendAnswer(i)}
                    disabled={selected !== null}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selected === i
                        ? "border-cyan-500 bg-cyan-600 text-white"
                        : "border-gray-600 bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-gray-400">Esperando Juego...</p>
          )}
        </div>
      </div>
    </div>
  );
}
