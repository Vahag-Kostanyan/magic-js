import { OrderConditionsArrayType, OrderConditionsType } from "./types/OrderConditionsType";
import { whereConditionsArrayType, WhereConditionsType } from "./types/WhereConditionsType";


class Query {
    public tableName: string = '';
    public whereConditions: whereConditionsArrayType | [] = [];
    public orderConditions: OrderConditionsArrayType | [] = [];
    public selectsFields: string = '*';

    public getSql(): string {
        return `SELECT ${this.selectsFields} FROM ${this.tableName} ${this.getWhereSQL} ${this.getOrderSQL}`;
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


    private get getOrderSQL(): string {
        if (this.orderConditions && this.orderConditions.length > 0) {
            let order: string = 'ORDER BY ';

            if (this.orderConditions.length) {
                this.orderConditions?.forEach((item: OrderConditionsType) => {
                    order += `${item.column} ${item.value}, `;
                });

                return order.slice(0, -2);
            }

            return order;
        }
        return '';
    }
}

export default Query;