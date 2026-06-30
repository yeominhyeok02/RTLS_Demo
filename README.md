# RTLS Demo

RTLS Demo Project

## Stack

- Client: React + Vite
- Server: Node.js + Express
- Database: MySQL

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
