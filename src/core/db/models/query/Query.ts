import { whereConditionsArrayType, WhereConditionsType } from "./types/WhereConditionsType";


class Query {
    public tableName: string = '';
    public whereConditions: Array<whereConditionsArrayType> | null = null;
    public selectsFields: string = '*';

    constructor (){
        this.whereConditions = [];
    }

    public getSql(): string {
        let where = '1';
        console.log(this.whereConditions);
        
        if(this.whereConditions?.length){
            const [firstWhereCondition, ...whereConditions ]: whereConditionsArrayType  = this.whereConditions || [];
            
            where += `${firstWhereCondition.column} ${firstWhereCondition.action} ${firstWhereCondition.value}`;

            if(whereConditions.length){
                whereConditions?.forEach((item: WhereConditionsType) => {
                    where += `${item.condition}  ${item.column} ${item.action} ${item.value}`;
                });
            }
        }

        return `SELECT ${this.selectsFields} FROM ${this.tableName} WHERE ${where} `;
    }

}

export default Query;