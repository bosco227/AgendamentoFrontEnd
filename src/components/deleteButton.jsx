import { deletarAgendamento } from "../services/api";

export function DeleteButton({ id, onDelete }) {
  const handleDelete = async () => {
    if (!confirm("Tem certeza que deseja excluir este agendamento?")) return;

    try {
      await deletarAgendamento(id);
      onDelete();
    } catch (err) {
      alert("Erro ao deletar: " + err.message);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 border border-red-200 rounded-md transition-colors"
    >
      Excluir
    </button>
  );
}
