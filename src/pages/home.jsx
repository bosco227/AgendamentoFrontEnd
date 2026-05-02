// Exemplo de como organizar a Home.jsx
import Formulario from "../components/form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Sistema de Agendamentos
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Gerencie seus horários com facilidade.
        </p>
      </div>

      <Formulario />

      {/* Aqui futuramente entrará sua lista de agendamentos usando o DeleteButton */}
    </main>
  );
}
