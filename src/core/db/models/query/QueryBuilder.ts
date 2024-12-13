import { RowDataPacket } from "mysql2";
import MySQLConnection from "../../connections/MySQLConnection";
import Query from "./Query";
import QueryBuilderInterface from "./types/QueryBuilderInterface";
import { AndWhereCondition, OrWhereCondition, whereConditionsArrayType, WhereConditionsType } from "./types/WhereConditionsType";

class QueryBuilder implements QueryBuilderInterface {
    private query: Query = new Query();

    setTableName(tableName: string): QueryBuilderInterface {
        this.query.tableName = tableName;
        return this;
    }

    public where(data: WhereConditionsType): QueryBuilderInterface {
        this.setWhereConditions(data, 'AND');
        return this;
    }

    public andWhere(data: AndWhereCondition): QueryBuilderInterface {
        this.setWhereConditions(data, 'AND');
        return this;
    }

    public orWhere(data: OrWhereCondition): QueryBuilderInterface {
        this.setWhereConditions(data, 'OR');
        return this;
    }

    public select(data: Array<string>): QueryBuilderInterface {
        const { select, ...rest } = this as any;
        return rest;
    }

    public getQuery(): string {
        return this.query.getSql();
    }

    async one(): Promise<RowDataPacket | null> {
        const dbInstance = await MySQLConnection.getInstance();
        const connection = await dbInstance.getConnection();
        let [rows] = await connection.query<RowDataPacket[]>(this.getQuery() + " LIMIT 1");
        return rows[0] ? rows[0] : null;
    }

    async get(): Promise<RowDataPacket[]> {
        const dbInstance = await MySQLConnection.getInstance();
        const connection = await dbInstance.getConnection();
        let [rows] = await connection.query<RowDataPacket[]>(this.getQuery());
        return rows;
    }


    private setWhereConditions(data: WhereConditionsType, condition: string): void {
        if (this.query.whereConditions?.length == 0) {
            (this.query.whereConditions as whereConditionsArrayType).push(data);
        } else {
            (this.query.whereConditions as whereConditionsArrayType).push({ ...data, condition: 'OR' });
        }
    }
}

export default QueryBuilder;