import { PoolConnection } from "mysql2/promise";
import MySQLConnection from "../connections/MySQLConnection"
import QueryBuilderInterface from "./query/types/QueryBuilderInterface";
import QueryBuilder from "./query/QueryBuilder";
import { ModelInterface } from "./types/ModelInterface";

abstract class Model implements ModelInterface {
    abstract tableName: string;
    private connection: PoolConnection | null = null;
    private queryBuilder: QueryBuilderInterface = new QueryBuilder();

    private async initializeConnection(): Promise<void> {
        if (!this.connection) {
            this.queryBuilder.setTableName(this.tableName);
            const dbInstance = await MySQLConnection.getInstance();
            this.connection = await dbInstance.getConnection();
        }
    }

    public find(): QueryBuilderInterface {
        this.queryBuilder.setTableName(this.tableName);
        return this.queryBuilder;
    }

    
    async findById(id: number)
    {
        return await this.queryBuilder.setTableName(this.tableName).where({ column: 'id', action: '=', value: id }).one();
    }

    async delete(id: number)
    {
        this.connection?.query(`DELETE FROM ${this.tableName} WHERE id = ${id}`);
    }
    
    // static async create()
    // {

    // }

    // static async update()
    // {

    // }
}

export default Model;