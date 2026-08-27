# TrabalhoFinal-EJCM2026.2

## E-commerce STYLE

Projeto final desenvolvido pelos trainees da EJCM: um **e-commerce full stack** com interface web em React e uma API REST desenvolvida com Node.js, Express, Prisma e PostgreSQL.

## Sobre o projeto

O **STYLE** é uma plataforma de e-commerce desenvolvida como projeto final da EJCM.

O sistema permite o gerenciamento de usuários, produtos, categorias, carrinho, pedidos, wishlist e demais recursos necessários para o funcionamento de uma loja virtual.

O projeto é dividido em duas partes principais:

* **Front-end:** aplicação web desenvolvida em React.
* **Back-end:** API REST desenvolvida com Node.js, Express, Prisma e PostgreSQL.

## Tecnologias utilizadas

### Back-end

* Node.js
* TypeScript
* Express
* Prisma
* PostgreSQL
* Zod
* JWT / sistema de autenticação
* npm

### Front-end

* React
* TypeScript
* Vite
* CSS


## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/)
* PostgreSQL
* npm
* Git


## Como rodar o Back-end

1. Entrar na pasta do back-end

```bash
cd back
```

 2. Instalar as dependências

```bash
npm install
```

 3. Criar o arquivo `.env`

Na pasta `back`, crie um arquivo `.env` seguindo o modelo disponibilizado no `.env.example`.

Exemplo:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/NOME_DO_BANCO?schema=public"
```

Preencha as informações de acordo com o seu banco de dados PostgreSQL.

 4. Gerar o Prisma Client

```bash
npx prisma generate
```

 5. Executar as migrations

```bash
npx prisma migrate dev
```

 5. Gerar as chaves de autenticação

```bash
npm run keys
```

7. Iniciar o servidor

Para iniciar o back-end em ambiente de desenvolvimento:

```bash
npm run start
```

ou, caso o script de desenvolvimento esteja configurado:

```bash
npm run dev
```

A API estará disponível na porta configurada no projeto.

## Como rodar o Front-end

 1. Entrar na pasta do front-end

Em outro terminal:

```bash
cd front
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o projeto

```bash
npm run dev
```

O Vite irá disponibilizar a aplicação no endereço informado no terminal.


## 👥 Autores

### Desenvolvedores
* Daniel Piccoli
* Layce Maria
* Maria Luiza
* Thales Alvarenga

### Tech Lead

* Maria Eduarda Albuquerque

