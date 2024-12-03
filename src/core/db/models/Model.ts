import { PoolConnection } from "mysql2/promise";
import MySQLConnection from "../connections/MySQLConnection"

abstract class Model {
    abstract tableName: string;
    private connection: PoolConnection | null = null;

    private async initializeConnection(): Promise<void> {
        if (!this.connection) {
            const dbInstance = await MySQLConnection.getInstance();
            this.connection = await dbInstance.getConnection();
        }
    }


    async get(): Promise<Array<any> | null> {
        await this.initializeConnection();
        if (!this.connection) throw new Error("Connection pool is not initialized.");
        try{
            let result = await this.connection.query(`SELECT * FROM ${this.tableName} WHERE 1`);
            return result[0] || null ;
        }catch (error) {
            console.error("Database query error:", error);
            throw error;
        }
    }


    // static async findById()
    // {

    // }


    // static async create()
    // {

    // }

    // static async update()
    // {

    // }


    // static async delete()
    // {

    // }
}

export default Model;