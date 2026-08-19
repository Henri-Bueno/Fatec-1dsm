# Projeto 5 — Consulta da Mega-Sena

## Visão geral

Projeto acadêmico desenvolvido durante a disciplina de Desenvolvimento Web. A aplicação consulta resultados de concursos da Mega-Sena armazenados em PostgreSQL e apresenta os dados em uma interface web.

## Funcionalidades

- Carregamento automático do concurso mais recente.
- Consulta por número de concurso.
- Exibição da data, dezenas sorteadas, ganhadores, rateios, estimativa e situação de acumulação.
- Formatação de datas e valores no padrão brasileiro.
- Mensagens de carregamento e erro.
- API para consulta do concurso mais recente ou de um concurso específico.

## Tecnologias utilizadas

- Node.js
- Express
- Dotenv
- PostgreSQL
- HTML
- CSS
- JavaScript
- SQL
- CSV

## Pré-requisitos

- Node.js
- npm
- PostgreSQL configurado conforme o arquivo `.env`
- Navegador web

## Instalação

Na pasta da aplicação, instale as dependências:

```bash
cd "atividade 5/app"
npm install
```

## Como executar

Para iniciar o servidor:

```bash
npm start
```

Para desenvolvimento com observação de alterações:

```bash
npm run dev
```

A porta é definida pelo `.env`, com fallback para `3000` quando não configurada. A configuração encontrada no projeto utiliza `3005`.

Para executar a inicialização do banco e importar os dados:

```bash
npm run db
```

## Scripts disponíveis

| Script | Função |
| --- | --- |
| `npm start` | Inicia o servidor com Node.js. |
| `npm run dev` | Inicia o servidor com `node --watch`. |
| `npm run db` | Executa a rotina de inicialização do banco. |

## Estrutura do projeto

```text
Projeto 5/
└── atividade 5/
    └── app/
        ├── public/
        │   ├── assets/
        │   │   ├── css/main.css
        │   │   └── js/main.js
        │   └── pages/index.html
        ├── src/
        │   ├── database/
        │   ├── infra/
        │   ├── repositories/
        │   ├── routes/
        │   └── server.js
        ├── package.json
        └── .env
```

## Resultado

Ao executar a aplicação com o banco configurado, o usuário pode consultar concursos e visualizar seus resultados e informações de premiação.
