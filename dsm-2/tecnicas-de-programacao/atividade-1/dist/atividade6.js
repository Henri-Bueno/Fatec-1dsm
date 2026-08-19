"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1- O Type Status representa um Tipo de União Literais, com três tipos de dados, sendo necessário para sua utilização a validação de exatamente um dos seus estados: "ativo", "inativo" ou "bloqueado".
//2 - O Type UsuarioSistema representa uma interseção de tipos, combinando o Type Usuario e adicionando em sua implementação o campo: "status:Status" (que deve ser um dos valores válidos de Status), e "ultimoAcesso?: Date" (campo não obrigatório para validação dos dados). 
//3-  Não é possível substituir por uma interface porque interfaces servem apenas para definir estruturas de objetos e classes. Uma interface não consegue representar diretamente uma união de valores fixos (como strings únicas), algo que apenas o type consegue fazer através das uniões (|).
//# sourceMappingURL=atividade6.js.map