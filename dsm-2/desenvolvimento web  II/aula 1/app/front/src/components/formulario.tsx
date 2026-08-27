
import { useState } from "react";
import type { Pessoa } from "../types/pessoa";

interface FormularioProps {
  onSalvar: (pessoa: Pessoa) => void;
}

export default function Formulario({ onSalvar }: FormularioProps) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  function handleSalvar() {
    const idadeNumerica = Number(idade);

    if (nome.trim() === "" || idadeNumerica < 1) {
      return;
    }
    onSalvar({ nome, idade: idadeNumerica });
    setIdade("");
    setNome("");
  }

  return (
    <>
      <div className="formField">
        <label htmlFor="cpnome">Nome</label>
        <input
          id="cpnome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>

      <div className="formField">
        <label htmlFor="cpidade">Idade</label>
        <input
          id="cpidade"
          type="number"
          min={0}
          value={idade}
          onChange={(event) => setIdade(event.target.value)}
        />
      </div>

      <button onClick={handleSalvar} className="add-button">
        Adicionar
      </button>
    </>
  );
}