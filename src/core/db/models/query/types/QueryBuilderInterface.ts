import { RowDataPacket } from "mysql2";
import { AndWhereCondition, OrWhereCondition, WhereConditionsType } from "./WhereConditionsType";
import { OrderConditionsType } from "./OrderConditionsType";

interface QueryBuilderInterface {
    getQuery(): string;
    where(data: WhereConditionsType): QueryBuilderInterface;
    orderBy(data: OrderConditionsType): QueryBuilderInterface;
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