import { RowDataPacket } from "mysql2";
import { AndWhereCondition, OrWhereCondition, WhereConditionsType } from "./WhereConditionsType";

interface QueryBuilderInterface {
    getQuery(): string;
    where(data: WhereConditionsType): QueryBuilderInterface;
    andWhere(data: AndWhereCondition): QueryBuilderInterface;
    orWhere(data: OrWhereCondition): QueryBuilderInterface;
    setTableName(tableName: string): QueryBuilderInterface;
    one(): Promise<RowDataPacket | null>;
    get(): Promise<RowDataPacket[]>
    select(data: Array<string>): QueryBuilderInterface;
    // limit(data: object): string;
    // offset(data: object): string;
    // sort(data: object): string;
    // order(data: object): string;
}

export default QueryBuilderInterface;