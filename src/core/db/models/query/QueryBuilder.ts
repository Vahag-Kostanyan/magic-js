import Query from "./Query";
import QueryBuilderInterface from "./QueryBuilderInterface";

class QueryBuilder implements QueryBuilderInterface {
    private query: Query = new Query();

    public getQuery(): string {
        return this.query.getSql();
    }

    public where(data: object): QueryBuilderInterface
    {
        this.query.whereConditions?.push(data);
        return this;
    }
}

export default QueryBuilder;