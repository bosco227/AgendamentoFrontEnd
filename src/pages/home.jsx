import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* 1. HERO SECTION - Impacto Inicial */}
      <section className="relative overflow-hidden bg-white px-6 py-16 lg:py-24 rounded-4xl border border-gray-100 shadow-2xl shadow-gray-200/50">
        {/* Círculos decorativos de fundo (Tailwind v4) */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
            Plataforma AgendJá v2.0
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-950 tracking-tight mb-8">
            Seu tempo é valioso. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
              Organize-o com um clique.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            A solução completa para gestão de horários. Ideal para prestadores
            de serviço que buscam profissionalismo e agilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agendar"
              className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all text-lg"
            >
              Começar Agendamento
            </Link>
            <Link
              to="/gerenciar"
              className="px-10 py-4 bg-white text-gray-900 font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all text-lg"
            >
              Acessar Painel Admin
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES - Por que usar? */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">
            ⚡
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Rápido e Fluído
          </h3>
          <p className="text-gray-600">
            Interface construída com React para garantir que o agendamento seja
            feito em menos de 30 segundos.
          </p>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-6">
            📊
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Gestão de Dados
          </h3>
          <p className="text-gray-600">
            Visualize todos os seus clientes em um banco de dados integrado e
            organizado por data e hora.
          </p>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-6">
            🛡️
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Controle Total
          </h3>
          <p className="text-gray-600">
            Cancele, edite ou remova agendamentos com facilidade através do
            painel administrativo.
          </p>
        </div>
      </section>

      {/* 3. CTA FINAL - Incentivo à ação */}
      <section className="bg-linear-to-br from-gray-900 to-gray-800 rounded-4xl p-10 md:p-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
          Pronto para automatizar seu negócio?
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Junte-se a centenas de profissionais que já modernizaram seu
          atendimento com nossa plataforma.
        </p>
        <Link
          to="/agendar"
          className="inline-block px-12 py-4 bg-white text-gray-900 font-black rounded-xl hover:bg-blue-50 transition-colors"
        >
          AGENDAR MEU PRIMEIRO CLIENTE
        </Link>
      </section>
    </div>
  );
}
