# An opinionated starter template for web projects

A starter template for web projects consisting of a postgres DB and node web server.

## Setup

### Start the database

`docker-compose up -d`

### Install dependencies

`npm install`

### Setup the database

`npx prisma init`

### Start developing

`npm run dev` - The local development server will be accessible at [http://localhost:3000](http://localhost:3000).

## Frameworks+libraries

At a high level, this template is a React web app using a node Express web server running GraphQL for data-fetching.

### Programming languages

[TypeScript](https://www.typescriptlang.org) is used for both for frontend and backend development

### Frontend

- [React](https://reactjs.org)
- [tailwindcss](https://tailwindcss.com)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [URQL](https://formidable.com/open-source/urql/)

### Backend

- [Express](https://expressjs.com)
- [GraphQL](https://graphql.org)
- [Prisma](https://www.prisma.io)

### Infrastructure/Development

- [webpack](https://webpack.js.org)
- [Babel](https://babeljs.io)
- [GraphQL code generator](https://www.graphql-code-generator.com)
- [React Refresh webpack plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
