import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NombreModerador() {
  const [nombre, setNombre] = useState("");
  const navegarVistas = useNavigate();

  const handleIngresar = () => {
    if (!nombre.trim()) return alert("Por favor ingresa tu nombre");
    navegarVistas("/panelmoderador", { state: { moderador: nombre } });
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl w-80">
      <h2 className="text-xl font-bold mb-4 text-center">Nombre Moderador</h2>
      <input
        type="text"
        placeholder="Nombre Moderador"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        onClick={handleIngresar}
      >
        Ingresar
      </button>
    </div>
  );
}
