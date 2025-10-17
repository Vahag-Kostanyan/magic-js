import { PoolConnection } from "mysql2/promise";
import MySQLConnection from "./connections/MySQLConnection";

class DB {
    private connection: PoolConnection | null = null;

    /**
     * @returns Promise<PoolConnection>
     */
    private async getConnection(): Promise<PoolConnection> {
        if (!this.connection) {
            const dbInstance = await MySQLConnection.getInstance();
            this.connection = await dbInstance.getConnection();
        }
        return this.connection;
    }

    /**
     * Run a raw SELECT query and get results
     */
    public async select<T = any>(query: string, params: any[] = []): Promise<T[]> {
        const conn = await this.getConnection();
        const [rows] = await conn.query(query, params);
        return rows as T[];
    }

    /**
     * Run INSERT, UPDATE, DELETE queries
     */
    public async execute(query: string, params: any[] = []): Promise<any> {
        const conn = await this.getConnection();
        const [result] = await conn.query(query, params);
        return result;
    }
}

export default DB;