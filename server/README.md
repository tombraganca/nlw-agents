# NLW Agents

Projeto desenvolvido durante o evento da Rocketseat focado em desenvolvimento de agentes com IA.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão do PostgreSQL para vetores
- **Zod** - Biblioteca para validação de schemas
- **Docker** - Containerização da aplicação

## 📋 Padrões de Projeto

- **Clean Architecture** - Separação de responsabilidades em camadas
- **Type Safety** - Tipagem forte em toda a aplicação
- **Environment Variables** - Configuração via variáveis de ambiente
- **Database Migrations** - Controle de versão do banco de dados
- **Schema Validation** - Validação de dados com Zod

## 🛠️ Setup e Configuração

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### Instalação

1. Clone o repositório:

```bash
git clone <repository-url>
cd nlw-agents/server
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com as seguintes variáveis:

```
PORT=3333
DB_HOST=postgresql://docker:docker@localhost:5432/nlw_agents
```

4. Inicie o banco de dados:

```bash
docker-compose up -d
```

5. Execute as migrations:

```bash
npx drizzle-kit migrate
```

6. (Opcional) Execute o seed do banco:

```bash
npm run db:seed
```

### Executando o Projeto

**Modo desenvolvimento:**

```bash
npm run dev
```

**Modo produção:**

```bash
npm run start
```

O servidor estará rodando em `http://localhost:3333`

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── schema/         # Schemas do banco de dados
│   ├── migrations/     # Migrations do Drizzle
│   └── connection.ts   # Conexão com o banco
├── http/
│   └── routes/         # Rotas da API
├── env.ts             # Configuração de variáveis
└── server.ts          # Servidor principal
```

## 🧪 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot reload
- `npm run start` - Executa em modo produção
- `npm run db:seed` - Executa o seed do banco de dados
- `npx drizzle-kit migrate` - Executa as migrations
- `npx drizzle-kit studio` - Abre o Drizzle Studio

## 📚 Endpoints

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista todas as salas

---

Desenvolvido durante o **NLW Agents** da [Rocketseat](https://rocketseat.com.br) 🚀
