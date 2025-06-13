# 🛒 Ecommerce Backend API

[![NestJS](https://img.shields.io/badge/NestJS-10.0-%23E0234E?logo=nestjs)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0-%232D3748?logo=prisma)](https://www.prisma.io/)
[![JWT](https://img.shields.io/badge/JWT-Auth-%23000000?logo=json-web-tokens)](https://jwt.io/)
[![SQLite](https://img.shields.io/badge/SQLite-3.0-%23003B57?logo=sqlite)](https://sqlite.org/)

API RESTful para plataforma e-commerce com autenticação JWT, gestão de pedidos e integração com frontend React.

## 🌟 Recursos Técnicos

### 🛡️ Autenticação Segura
- Registro/login com JWT
- Hashing de senhas com bcrypt
- Rotas protegidas por guardas de autenticação
- Token expiration e renovação

### 🗃️ Arquitetura Modular
src/
├── auth/ # Autenticação JWT
├── orders/ # Gestão de pedidos
├── products/ # Catálogo de produtos
├── users/ # Gestão de usuários
├── prisma/ # Schema e migrations
└── shared/ # Utilitários comuns

### 📦 Gestão de Dados
- ORM Prisma com SQLite (facil migração para PostgreSQL/MySQL)
- Relações completas (User ↔ Order ↔ Product)
- Validação de dados com class-validator
- Paginação e filtros

### 🔌 Endpoints Principais
| Método | Rota               | Descrição                     |
|--------|--------------------|-------------------------------|
| POST   | /auth/login        | Autenticação de usuário       |
| POST   | /auth/signup       |    Registro de novo usuário   |
| GET    | /products          | Listagem de produtos          |
| GET    | /orders/me         | Pedidos do usuário atual      |
| POST   | /orders            | Criação de novo pedido        |

## 🚀 Configuração

### Pré-requisitos
- Node.js 18+
- npm 9+
- SQLite3 (embutido)

### Instalação Passo-a-Passo

1. Clone o repositório:
```bash
  git clone https://github.com/Gabryel-w/Ecommerce-Backend.git
  cd Ecommerce-Backend
```
2. Instale as dependências:

```bash
   npm install
```
3. Crie um arquivo .env na raiz do projeto com o conteudo abaixo:

```bash
  DATABASE_URL="file:./dev.db"
  JWT_SECRET= crie uma chave secreta forte, Exemplo: xPz3aF7u+gN9VZlTc1gKqO1KqLKxhLjaZUSyGkzX9QI=
  JWT_EXPIRES_IN=1d
```
4.Execute as migrations:

```bash
  npx prisma generate
```

5. Inicie o servidor:

```bash
  npm  start
```

# Autor

Gabryel Willers