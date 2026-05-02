import { useEffect, useState } from "react";
import { buscarAgendamentos } from "../services/api"; // Certifique-se de que essa função existe no seu api.js
import { DeleteButton } from "../components/DeleteButton";

export default function Gerenciamento() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os dados do banco
  const carregarDados = async () => {
    try {
      setLoading(true);
      const dados = await buscarAgendamentos();
      setAgendamentos(dados);
    } catch (err) {
      console.error("Erro ao carregar agendamentos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Painel de Controle
            </h1>
            <p className="text-gray-500">
              Gerencie e visualize todos os agendamentos realizados.
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <span className="text-sm font-medium text-gray-600">Total: </span>
            <span className="text-lg font-bold text-blue-600">
              {agendamentos.length}
            </span>
          </div>
        </header>

        {loading ? (
          <div className="text-center py-10 text-gray-500 italic">
            Carregando agendamentos...
          </div>
        ) : agendamentos.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">
              Nenhum agendamento encontrado.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {agendamentos.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <div className="flex gap-6 items-center">
                  {/* Ícone ou Data estilizada */}
                  <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-center min-w-[70px]">
                    <span className="block text-xs uppercase font-bold">
                      Data
                    </span>
                    <span className="text-sm font-semibold">{item.data}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.nome}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        🕒 {item.hora}
                      </span>
                      <span>•</span>
                      <span>ID: #{item.id}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Seu componente de DeleteButton sendo utilizado aqui */}
                  <DeleteButton id={item.id} onDelete={carregarDados} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
