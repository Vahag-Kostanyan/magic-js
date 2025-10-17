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

    async findById(id: number) {
        await this.initializeConnection();
        return await this.queryBuilder.setTableName(this.tableName).where({ column: 'id', action: '=', value: id }).one();
    }

    async delete(id: number) {
        await this.initializeConnection();
        this.connection?.query(`DELETE FROM ${this.tableName} WHERE id = ${id}`);
    }

    async create(data: Record<string, any>) {
        await this.initializeConnection();
        const columns = Object.keys(data).join(', ');
        const placeholders = Object.keys(data).map(() => '?').join(', ');
        const values = Object.values(data);

        const [result] = await this.connection!.query(
            `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`,
            values
        );

        return result;
    }

    async update(id: number, data: Record<string, any>) {
        await this.initializeConnection();
        const setString = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const values = [...Object.values(data), id];

        const [result] = await this.connection!.query(
            `UPDATE ${this.tableName} SET ${setString} WHERE id = ?`,
            values
        );

        return result;
    }

    static find<T extends typeof Model>(this: T) {
        return (new (this as any)()).find();
    }

    static findById<T extends typeof Model>(this: T, id: number) {
        return (new (this as any)()).findById(id);
    }

    static delete<T extends typeof Model>(this: T, id: number) {
        return (new (this as any)()).delete(id);
    }

    static create<T extends typeof Model>(this: T, data: Record<string, any>) {
        return (new (this as any)()).create(data);
    }

    static update<T extends typeof Model>(this: T, id: number, data: Record<string, any>) {
        return (new (this as any)()).update(id, data);
    }
}

export default Model;