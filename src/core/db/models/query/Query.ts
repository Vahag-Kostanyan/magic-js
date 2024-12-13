import { whereConditionsArrayType, WhereConditionsType } from "./types/WhereConditionsType";


class Query {
    public tableName: string = '';
    public whereConditions: whereConditionsArrayType | [] = [];
    public selectsFields: string = '*';

    public getSql(): string {
        return `SELECT ${this.selectsFields} FROM ${this.tableName} ${this.getWhereSQL}`;
    }

    private get getWhereSQL(): string {
        if (this.whereConditions && this.whereConditions.length > 0) {
            let where: string = 'WHERE ';

            const [firstWhereCondition, ...whereConditions]: WhereConditionsType[] = this.whereConditions;

            where += `${firstWhereCondition.column} ${firstWhereCondition.action} ${firstWhereCondition.value}`;

            if (whereConditions.length) {
                whereConditions?.forEach((item: WhereConditionsType) => {
                    where += `${item?.condition}  ${item.column} ${item.action} ${item.value}`;
                });
            }
            return where;
        }
        return '';
    }

}

export default Query;