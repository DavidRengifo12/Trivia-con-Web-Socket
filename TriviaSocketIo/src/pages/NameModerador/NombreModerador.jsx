import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/namemoderador.css'

export default function NombreModerador() {
  const [nombre, setNombre] = useState("");
  const navegarVistas = useNavigate();

  const handleIngresar = () => {
    if (!nombre.trim()) return alert("Por favor ingresa tu nombre");
    navegarVistas("/panelmoderador", { state: { moderador: nombre } });
  };

  return (
    <div className="flex justify-center items-center h-screen img-fondo2">
      <div className="bg-gray-300/70 rounded-xl shadow-lg p-6 mx-auto max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Nombre Moderador</h2>
      <input
        type="text"
        placeholder="Nombre Moderador"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        className="w-full bg-teal-700 text-white py-2 rounded hover:bg-white hover:text-teal-700 cursor-pointer"
        onClick={handleIngresar}
      >
        Ingresar
      </button>
      </div>
    </div>
  );
}
