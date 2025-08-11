# Magic-JS

Magic-JS is a TypeScript-based ORM (Object-Relational Mapping) framework designed to simplify database operations with a fluent query builder interface. It provides an elegant way to interact with MySQL databases in Node.js applications.

## Features

- 🚀 Built with TypeScript for type safety
- 🔌 MySQL database support with connection pooling
- 🛠️ Fluent query builder interface
- 🏗️ Model-based architecture
- 🔄 Connection pooling for better performance
- 🔍 Advanced query capabilities (where conditions, ordering, etc.)

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_DATABASE=your_database
```

## Usage

### Basic Model Example

```typescript
import Model from '../core/db/models/Model';

class Users extends Model {
    tableName = 'users';
}

export default new Users();
```

### Query Examples

```typescript
// Find all users
const users = await Users.find().getQuery();

// Find by ID
const user = await Users.findById(1);

// Complex query with conditions and ordering
const query = await Users.find()
    .where({column: 'id', action: '>', value: '2'})
    .orderBy({column: 'name', value: "ASC"})
    .orderBy({column: 'id', value: "DESC"})
    .getQuery();
```

## Project Structure

```
src/
├── configs.ts           # Configuration setup
├── index.ts            # Application entry point
├── core/               # Core framework components
│   ├── db/            
│   │   ├── connections/  # Database connection handlers
│   │   ├── migration/    # Database migration tools
│   │   └── models/       # Base model and query builder
│   ├── router/         # Routing functionality
│   └── validation/     # Data validation tools
└── db/                 # Application specific database files
    ├── migrations/     # Database migrations
    ├── models/         # Application models
    └── seeds/          # Database seeders
```

## Scripts

- `npm run build` - Build the TypeScript code
- `npm run start` - Start the production server
- `npm run dev` - Start the development server with hot-reload

## Development

The project uses Nodemon for development, which automatically restarts the server when file changes are detected.

## Dependencies

- Express.js - Web framework
- MySQL2 - MySQL client for Node.js
- TypeScript - Programming language
- Dotenv - Environment variable management
- Nodemon - Development server

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is open-sourced software licensed under the MIT license.