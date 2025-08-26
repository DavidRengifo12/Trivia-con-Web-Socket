import { useState } from "react";
import socket from "../../../src/socket";

export default function JoinRoom({ setRoom, setPlayers }) {
  const [nickname, setNickname] = useState("");
  const [code, setCode] = useState("");

  const handleJoin = () => {
    socket.emit("player:join_room", { code, nickname }, (res) => {
      if (res.error) return alert(res.error);
      setRoom({ code });
    });

    socket.on("room:state", ({ players }) => {
      setPlayers(players);
    });
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl w-80">
      <h2 className="text-xl font-bold mb-4 text-center">Unirse a la Sala</h2>
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Código Sala"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleJoin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Ingresar
      </button>
    </div>
  );
}
