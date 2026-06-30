# RTLS Demo

RTLS Demo Project

## Stack

- Client: React + Vite
- Server: Node.js + Express
- Database: PostgreSQL

## Structure

```
rtls_demo/
  client/
  server/
```

## Setup

```
npm install
cp server/.env.example server/.env
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:3001
- Health check: http://localhost:3001/api/health

## Environment

Server environment values live in `server/.env`.

```env
PORT=3001
CLIENT_ORIGIN=http://localhost:5173

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_DATABASE=rtls_demo
```
