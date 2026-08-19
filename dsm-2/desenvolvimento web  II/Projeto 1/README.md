# Projeto 1 — Seletor de cores RGB

## Visão geral

Projeto acadêmico desenvolvido durante a disciplina de Desenvolvimento Web II. A aplicação front-end recebe valores para os canais vermelho, verde e azul e atualiza visualmente a cor resultante.

## Funcionalidades

- Entrada numérica para os canais R, G e B.
- Atualização do estado da aplicação a cada alteração dos valores.
- Exibição da cor resultante.
- Exibição dos valores RGB na interface.
- Uso de uma cor inversa para o texto exibido sobre a amostra.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- HTML
- CSS

## Pré-requisitos

- Node.js
- npm
- Navegador web

## Instalação

Na pasta do front-end, instale as dependências:

```bash
cd app/front
npm install
```

## Como executar

Para iniciar o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

O Vite utiliza normalmente a porta `5173`, caso ela esteja disponível.

## Scripts disponíveis

| Script | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm run build` | Executa a verificação TypeScript e gera o build. |
| `npm run lint` | Executa o ESLint. |
| `npm run preview` | Inicia uma pré-visualização do build. |

## Estrutura do projeto

```text
Projeto 1/
└── app/
    └── front/
        ├── public/
        ├── src/
        │   ├── components/
        │   ├── App.tsx
        │   ├── App.css
        │   └── main.tsx
        ├── index.html
        ├── package.json
        └── vite.config.ts
```

## Resultado

Ao executar a aplicação, o usuário informa os canais RGB e visualiza uma amostra da cor correspondente na interface.

O README original do front-end permanece em [`app/front/README.md`](./app/front/README.md).
