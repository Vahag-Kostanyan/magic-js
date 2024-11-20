import { createConnection, Connection } from 'mysql2';

class MySQLConnection {
    static #instance: MySQLConnection;
    #connection: Connection;

    private constructor() {
        this.#connection = createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
        this.#connection.connect((err) => {
            if (err) {
                console.error('Database connection error:', err);
                throw new Error('Failed to connect to the database');
            }
            console.log('Database connected successfully');
        });
    }

    public static get instance(): MySQLConnection {
        if (!MySQLConnection.#instance) MySQLConnection.#instance = new MySQLConnection();
        return MySQLConnection.#instance;
    }

    public getConnection(): Connection {
        return this.#connection;
    }
}

export default MySQLConnection;