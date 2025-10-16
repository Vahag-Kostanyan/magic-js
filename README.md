# Magic-JS Framework

A lightweight TypeScript framework for building web applications with Express, featuring a fluent query builder, validation system, and routing management.

## Features

- 🏗️ **Modular Architecture**
  - Express-based routing system
  - MySQL database integration
  - Model-based ORM
  - Validation framework

- 🔍 **Query Builder**
  - Fluent interface for building SQL queries
  - Support for complex WHERE conditions
  - Order by functionality
  - Connection pooling

- ✅ **Validation System**
  - Extensible validation rules
  - Support for custom validation hooks
  - Built-in common validation rules

## Features

- 🚀 Built with TypeScript for type safety
- 🔌 MySQL database support with connection pooling
- 🛠️ Fluent query builder interface
- 🏗️ Model-based architecture
- 🔄 Connection pooling for better performance
- 🔍 Advanced query capabilities (where conditions, ordering, etc.)

## Installation

```sh
npm install
```

## Configuration

Create a `.env` file in the root directory:

```env
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_DATABASE=your_database
```

## Quick Start

### 1. Define a Model

```typescript
import Model from "../../core/db/models/Model";

class Users extends Model {
  tableName: string = 'users';
  
  static find() {
    return new this().find();
  }
}
```

### 2. Create a Validation

```typescript
import Validation from "../core/validation/validation";

class SignUpValidation extends Validation {
  protected rules(): ValidateDataType {
    return {
      name: ["required", "string", "min:3", "max:20"],
      email: ["required", "email"],
      password: ["required", "string", "min:6"]
    };
  }
}
```

### 3. Define Routes

```typescript
import RouterBuilder from "./core/router/RouterBuilder";

RouterBuilder.group({ prefix: "/api" }, (router) => {
    router.get("/users", (req, res) => { 
        res.json([{ id: 1, name: "John" }]); 
    });
});
```

## API Reference

### Query Builder

```typescript
// Find all records
await Users.find().get();

// Complex query
await Users.find()
  .where({ column: 'id', action: '>', value: '2' })
  .orderBy({ column: 'name', value: "ASC" })
  .get();
```

### Validation

```typescript
const data = {
  name: "John Doe",
  email: "john@example.com",
  password: "123456"
};

const validation = new SignUpValidation(data);
if (!validation.validate()) {
  console.log(validation.getErrors());
}
```

### Router

```typescript
RouterBuilder.group({ 
  prefix: "/api", 
  middleware: [authMiddleware] 
}, (router) => {
  router.get("/users", usersController);
  router.post("/users", createUserController);
});
```

## Development

```sh
# Run in development mode
npm run dev

# Build project
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── core/                 # Framework core components
│   ├── db/              # Database functionality
│   ├── router/          # Routing system
│   └── validation/      # Validation framework
├── db/                  # Application database
│   ├── migrations/
│   ├── models/
│   └── seeds/
├── validations/        # Application validations
└── router.ts          # Application routes
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

For major changes, please open an issue first to discuss what you would like to change.