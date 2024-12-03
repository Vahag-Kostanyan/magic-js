class Query {
    public tableName: string = '';
    public whereConditions: Array<object> | null = null;
    public selectsFields: string = '*';

    public getSql(): string {
        let where = '1';
        this.whereConditions?.forEach((item: object, index: number) => {
            if(index == 0){
                where = `${item.colument} ${item.action} ${item.value}`;
            }else{
                where+ = `${item.condition}  ${item.colument} ${item.action} ${item.value}`;
            }
        });
        return `SELECT ${this.selectsFields} FROM ${this.tableName} WHERE ${where} ;`;
    }

}

export default Query;