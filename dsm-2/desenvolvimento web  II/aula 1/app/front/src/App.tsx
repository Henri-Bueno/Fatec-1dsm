import { useState } from "react";
import type {Pessoa} from "./types/pessoa"
import ListaPessoas from "./components/listaPessoas.tsx"
import Formulario from "./components/Formulario.tsx";


export default function App() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  function handleSalvar(pessoa: Pessoa) {
    setPessoas([...pessoas, pessoa]);
  }

  function handleRemover(indice: number) {
    const filtrado = pessoas.filter((_, indiceAtual) => indiceAtual !== indice);
    setPessoas(filtrado)
  }

  return (
    <main className="container">
      <section className="card">
        <h1>Cadastro de Pessoas</h1>
        <Formulario onSalvar={handleSalvar} />
        <h2>Pessoas Cadastradas</h2>
        <ListaPessoas pessoas={pessoas} onRemover={handleRemover}/>
      </section>

    </main>
  );
}