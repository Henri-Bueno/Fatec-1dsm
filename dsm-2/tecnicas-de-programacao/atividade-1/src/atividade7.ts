interface Pessoa {
    nome: string;
}
interface Funcionario {
    matricula: number;
}
interface Professor extends Pessoa, Funcionario {
    disciplina: string;
}
function cadastrarProfessor(professor: Professor) {
    console.log(professor);
}

cadastrarProfessor({nome: "Vitor Octavius", matricula: 5455, disciplina: "Matemática"});

const professor2: Professor = {
    nome: "Vitor Reis", 
    matricula: 5246, 
    disciplina: "Estrutura de Dados"
}

cadastrarProfessor(professor2);