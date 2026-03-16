# Aplicação Web Simples

Uma aplicação web básica desenvolvida com Node.js e Express, oferecendo páginas de login, cadastro e uma página inicial.

## Funcionalidades

- Página inicial (/)
- Página de login (/login)
- Página de cadastro (/cadastro)
- Tratamento de erro 404
- Servir arquivos estáticos (CSS, imagens)

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Express.js**: Framework web para Node.js
- **Dotenv**: Gerenciamento de variáveis de ambiente

## Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   cd app
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e defina a porta:
   ```
   PORT=3000
   ```

## Uso

Para iniciar o servidor em modo de desenvolvimento (com watch):
```
npm run dev
```

Para iniciar o servidor em produção:
```
npm start
```

Acesse a aplicação em `http://localhost:PORT` (substitua PORT pela porta definida no .env).

## Estrutura do Projeto

```
app/
├── server.js          # Arquivo principal do servidor
├── package.json       # Dependências e scripts
├── public/
│   ├── assets/        # Arquivos estáticos (CSS, imagens)
│   └── pages/         # Páginas HTML
│       ├── index.html
│       ├── login.html
│       ├── cadastro.html
│       └── 404.html
└── .env               # Variáveis de ambiente (não incluído no repositório)
```

## Licença

Este projeto está licenciado sob a Licença ISC.