# Projeto 2 — Sena Web App

## Visão geral

Projeto acadêmico desenvolvido durante a disciplina de Desenvolvimento Web. A aplicação permite cadastrar e listar jogos de loteria com seis dezenas.

## Funcionalidades

- Listagem dos jogos cadastrados.
- Cadastro de um novo jogo.
- Validação de seis dezenas separadas por espaço.
- Mensagens de carregamento, sucesso e erro.
- Renderização visual das dezenas em bolas.

## Tecnologias utilizadas

- Node.js
- Express
- Dotenv
- PostgreSQL
- HTML
- CSS
- JavaScript

## Pré-requisitos

- Node.js
- npm
- PostgreSQL configurado conforme o arquivo `.env`
- Navegador web

## Instalação

Na pasta da aplicação, instale as dependências:

```bash
cd "atividade 4/app"
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

O servidor utiliza a porta `3004`.

## Scripts disponíveis

| Script | Função |
| --- | --- |
| `npm start` | Inicia o servidor com Node.js. |
| `npm run dev` | Inicia o servidor com `node --watch`. |

## Estrutura do projeto

```text
Projeto 2/
└── atividade 4/
    └── app/
        ├── public/
        │   ├── assets/
        │   │   ├── css/main.css
        │   │   └── js/main.js
        │   └── pages/index.html
        ├── src/
        │   ├── database/
        │   ├── routes/
        │   └── server.js
        ├── package.json
        └── .env
```

## Resultado

Ao executar a aplicação, o usuário pode cadastrar jogos com seis dezenas e consultar a lista exibida na interface.

O README original da aplicação permanece em [`app/README.md`](./atividade%204/app/README.md).
