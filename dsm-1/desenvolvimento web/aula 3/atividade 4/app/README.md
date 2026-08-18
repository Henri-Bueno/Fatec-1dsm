# Sena Web App

Aplicação web para cadastrar e listar jogos de loteria (sena) com 6 dezenas.

## 🧩 Visão geral

- Back-end: Node.js + Express
- Front-end: HTML, CSS e JavaScript (vanilla)
- Banco de dados: via `src/database/connection.js` (ex: SQLite/MySQL/PostgreSQL)
- Objetivo: permitir cadastro de senas e exibição em interface interativa.

## 📁 Estrutura do projeto

- `src/server.js` - Servidor Express
- `src/routes/sena.routes.js` - Rotas da API
- `src/database/connection.js` - Conexão com DB
- `src/database/senas.js` - Querys de senas
- `public/pages/index.html` - Front-end principal
- `public/assets/js/main.js` - Lógica de UI e API
- `public/assets/css/main.css` - Estilos visuais
- `package.json` - Dependências e scripts

## 🚀 Funcionalidades

- Listar jogos cadastrados (`GET /senas`)
- Cadastrar novo jogo (`POST /senas`)
- Validação de entrada: 6 dezenas separadas por espaço
- Feedback de sucesso e erro
- Renderização das dezenas na lista (com bolinhas de estilo)

## 🛠️ Pré-requisitos

- Node.js 14+ instalado
- npm ou yarn
- Banco de dados configurado (conforme `database/connection.js`)

## ▶️ Instalação

```bash
git clone <url-do-repo>
cd app
npm install
```

## ▶️ Executar

```bash
npm start
```

Acesse `http://localhost:3004` (ou porta configurada)

## 📌 API

### GET /senas

Retorna array JSON com jogos.

Exemplo de resposta:

```json
[
  { "id": 1, "nros": "01 02 03 04 05 06" },
  { "id": 2, "nros": "07 08 09 10 11 12" }
]
```

### POST /senas

Requisição:

```json
{ "nros": "01 02 03 04 05 06" }
```

Validação: 6 números, separados por espaço.

## 🧪 Scripts

Em `package.json`:

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```