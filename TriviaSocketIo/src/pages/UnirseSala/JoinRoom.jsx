import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/joinroom.css'
import socket from "../../socket";

export default function JoinRoom() {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (!name.trim() || !roomCode.trim()) return alert("Completa todos los campos");

    // se emitio al backend para que se unan a la sala
    socket.emit("player:join_room", { code: roomCode, nickname: name }, (res) => {
      if (res.error) return alert(res.error);

      // se Paso el roomCode al jugador
      navigate("/preguntasjuego", { state: { roomCode } });
    });
  };

  return (
    <div className="flex justify-center items-center h-screen img-fondo">
      <div className="bg-gray-300/70 rounded-xl shadow-lg p-6 mx-auto max-w-sm ">
        <h2 className="text-2xl font-bold mb-4 text-center">Unirse a la Sala</h2>
        <input
          type="text"
          placeholder="Nombre del jugador"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-4 rounded hover:border-teal-700"
        />
        <input
          type="text"
          placeholder="Código de la sala"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
          className="w-full border p-2 mb-4 rounded hover:border-teal-700"
        />
        <button
          onClick={handleJoin}
          className="w-full bg-teal-700 text-white py-2 rounded hover:bg-white hover:text-teal-700 cursor-pointer"
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}
