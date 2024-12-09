import { RowDataPacket } from "mysql2";
import MySQLConnection from "../../connections/MySQLConnection";
import Query from "./Query";
import QueryBuilderInterface from "./types/QueryBuilderInterface";
import { AndWhereCondition, OrWhereCondition, WhereConditionsType } from "./types/WhereConditionsType";

class QueryBuilder implements QueryBuilderInterface {
    private query: Query = new Query();

    setTableName(tableName: string): QueryBuilderInterface {
        this.query.tableName = tableName;
        return this;
    }

    public where(data: Omit<WhereConditionsType, 'condition'>): QueryBuilderInterface {        
        console.log(data);
        this.query.whereConditions?.push(data);
        return this;
    }

    public andWhere(data: Omit<AndWhereCondition, 'condition'>): QueryBuilderInterface {
        this.query.whereConditions?.push({...data, condition: 'AND'});
        return this;
    }

    public orWhere(data: Omit<OrWhereCondition, 'condition'>): QueryBuilderInterface {
        this.query.whereConditions?.push({...data, condition: 'OR'});
        return this;
    }

    public getQuery(): string {
        return this.query.getSql();
    }

    async one(): Promise<RowDataPacket | null>
    {
        const dbInstance = await MySQLConnection.getInstance();
        const connection = await dbInstance.getConnection();   
        let [rows] = await connection.query<RowDataPacket[]>(this.getQuery() + " LIMIT 1");
        return rows[0] ? rows[0] : null;
    }

    async get(): Promise<RowDataPacket[]>
    {
        const dbInstance = await MySQLConnection.getInstance();
        const connection = await dbInstance.getConnection();   
        let [rows] = await connection.query<RowDataPacket[]>(this.getQuery());
        return rows;
    }
}

export default QueryBuilder;