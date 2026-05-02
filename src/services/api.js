const BASE_URL = "http://localhost:3000/agendamentos";

// BUSCAR TODOS (GET)
export async function buscarAgendamentos() {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Erro ao buscar agendamentos");
  }

  return await res.json();
}

// CRIAR (POST)
export async function criarAgendamento(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error("Resposta não é JSON:\n" + text);
  }

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.erro || "Erro ao agendar");
  }

  return json;
}

// DELETAR (DELETE)
export async function deletarAgendamento(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.erro || "Erro ao deletar");
  }

  return json;
}
