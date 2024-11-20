import { Connection } from "mysql2";
import MySQLConnection from "../connections/MySQLConnection"

class Model {
    protected static tableName: string
    static connection: Connection|null = MySQLConnection.instance.getConnection(); 

    static async get()
    {
        const sql = `SELECT * FROM ${this.tableName}`;
        const [rows] = await this.connection?.execute(sql);
        this.connection?.end();

    }


    static async findById()
    {
        
    }


    static async create()
    {
        
    }

    static async update()
    {
        
    }


    static async delete()
    {
        
    }
}