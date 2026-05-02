import { useState } from "react";
import { criarAgendamento } from "../services/api";
import { DeleteButton } from "./deleteButton";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await criarAgendamento({ nome, data, hora });
      alert("Agendado com sucesso!");
      // Limpa os campos após o sucesso
      setNome("");
      setData("");
      setHora("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Novo Agendamento
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome do Cliente
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            placeholder="Ex: João Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hora
            </label>
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md active:scale-[0.98]"
        >
          Confirmar Agendamento
        </button>
      </form>
    </div>
  );
}
