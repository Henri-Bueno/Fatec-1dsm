import type {Pessoa} from "../types/pessoa"

interface ListaPessoasProps {
  pessoas: Pessoa[]
  onRemover: (value:number) => void
}

export default function ListaPessoas({ pessoas, onRemover }: ListaPessoasProps) {
  return (
    <>

      
      {pessoas.length === 0 ? (
        <p className="empty-message">Nenhuma Pessoa Cadastrada</p>
      ) : (
        <ul className="person-list">
          {pessoas.map((item, indice) => (
            <li className="person-item" key={indice}>
              <div className="person-data">
                <strong>{item.nome} - {item.idade}</strong>
              </div>
              <button className="remove-button" onClick={() => onRemover(indice)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}