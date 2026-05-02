// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importe suas páginas aqui (ajuste o caminho conforme sua estrutura)
import Home from "./pages/home";
import AgendarPage from "./pages/agendar"; // Onde está o seu Formulario
import Gerenciamento from "./pages/admin";
import "./index.css";

// Um componente de Navegação simples com Tailwind v4
function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 tracking-tight"
        >
          Agend<span className="text-blue-600">Já</span>
        </Link>
        <div className="flex gap-3">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition"
          >
            Início
          </Link>
          <Link
            to="/gerenciar"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition"
          >
            Painel Admin
          </Link>
          <Link
            to="/agendar"
            className="text-sm font-semibold bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            Agendar Horário
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />

        {/* Onde o conteúdo de cada página será renderizado */}
        <main className="max-w-7xl mx-auto p-6 md:p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agendar" element={<AgendarPage />} />
            <Route path="/gerenciar" element={<Gerenciamento />} />
            {/* Rota 404 opcional */}
            <Route
              path="*"
              element={
                <div className="text-center py-20 text-gray-500">
                  Página não encontrada.
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
