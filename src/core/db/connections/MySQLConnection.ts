import { Pool, createPool, PoolConnection } from "mysql2/promise";

class MySQLConnection {
  private static instance: MySQLConnection;
  private connection: PoolConnection | null = null;
  private pool: Pool | null;

  private constructor() {
    this.pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      waitForConnections: true,
    });
  }

  public static async getInstance(): Promise<MySQLConnection> {
    if (!MySQLConnection.instance)  MySQLConnection.instance = new MySQLConnection();
    return MySQLConnection.instance;
  }

  public async getConnection(): Promise<PoolConnection> {
    if (!this.pool) throw new Error("Connection pool is not initialized.");
    if (!this.connection) this.connection = await this.pool.getConnection();
    return this.connection;
  }

  public async disconnect(): Promise<void> {
    if (this.pool) {
      await this.pool.end();
      this.pool = null;
    }
  }
}

export default MySQLConnection;
