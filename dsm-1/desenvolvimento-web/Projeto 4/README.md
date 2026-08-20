# Projeto 4 — Objetivos de Desenvolvimento Sustentável

## Visão geral

Projeto acadêmico desenvolvido durante a disciplina de Desenvolvimento Web. A aplicação apresenta os 17 Objetivos de Desenvolvimento Sustentável da ONU em uma interface informativa e responsiva.

## Funcionalidades

- Apresentação dos 17 ODS com imagens correspondentes.
- Alternância entre tema claro e escuro.
- Persistência do tema escolhido no navegador.
- Página de erro 404 para rotas não encontradas.

## Tecnologias utilizadas

- Node.js
- Express
- Dotenv
- HTML
- CSS
- JavaScript
- Imagens SVG e PNG
- `localStorage`

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

O servidor utiliza a porta `3005`.

## Scripts disponíveis

| Script | Função |
| --- | --- |
| `npm start` | Inicia o servidor com Node.js. |
| `npm run dev` | Inicia o servidor com `node --watch`. |

## Estrutura do projeto

```text
Projeto 4/
└── app/
    ├── public/
    │   ├── assets/
    │   │   ├── css/main.css
    │   │   ├── images/
    │   │   └── js/main.js
    │   └── pages/
    ├── src/server.js
    ├── package.json
    └── .env
```

## Resultado

Ao executar a aplicação, o usuário visualiza os ODS e pode alternar o tema da página, que fica armazenado no navegador.
