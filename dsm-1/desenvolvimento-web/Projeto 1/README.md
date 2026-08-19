# Projeto 1 — Consulta de CEP

## Visão geral

Projeto acadêmico desenvolvido durante a disciplina de Desenvolvimento Web. A aplicação consulta informações de endereço a partir de um CEP informado pelo usuário.

## Funcionalidades

- Limpeza de caracteres não numéricos do CEP.
- Validação de oito dígitos.
- Consulta à API ViaCEP.
- Exibição de CEP, logradouro, complemento, bairro, cidade, UF, estado, região e DDD.
- Mensagens para CEP inválido, não encontrado e falha no serviço.
- Consulta ao pressionar Enter.

## Tecnologias utilizadas

- Node.js
- Express
- Dotenv
- HTML
- CSS
- JavaScript
- API ViaCEP

## Pré-requisitos

- Node.js
- npm
- Navegador web

## Instalação

Na pasta da aplicação, instale as dependências:

```bash
cd app
npm install
```

## Como executar

```bash
npm start
```

Para desenvolvimento com observação de alterações:

```bash
npm run dev
```

O servidor utiliza a porta `3002`.

## Scripts disponíveis

| Script | Função |
| --- | --- |
| `npm start` | Inicia o servidor com Node.js. |
| `npm run dev` | Inicia o servidor com `node --watch`. |

## Estrutura do projeto

```text
Projeto 1/
└── app/
    ├── public/
    │   ├── assets/
    │   │   ├── css/main.css
    │   │   └── js/main.js
    │   └── pages/index.html
    ├── server.js
    ├── package.json
    └── .env
```

## Resultado

Ao executar a aplicação, o usuário acessa uma interface para informar um CEP e visualizar os dados retornados pela ViaCEP.
