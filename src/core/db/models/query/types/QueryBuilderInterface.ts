import { RowDataPacket } from "mysql2";
import { AndWhereCondition, OrWhereCondition, WhereConditionsType } from "./WhereConditionsType";

interface QueryBuilderInterface {
    getQuery(): string;
    where(data:  Omit<WhereConditionsType, 'condition'>): QueryBuilderInterface;
    andWhere(data: Omit<AndWhereCondition, 'condition'>): QueryBuilderInterface;
    orWhere(data: Omit<OrWhereCondition, 'condition'>): QueryBuilderInterface;
    setTableName(tableName: string): QueryBuilderInterface;
    one():  Promise<RowDataPacket | null>;
    get(): Promise<RowDataPacket[]>
    // select(data: object): string;
    // limit(data: object): string;
    // offset(data: object): string;
    // sort(data: object): string;
    // order(data: object): string;
}

export default QueryBuilderInterface;