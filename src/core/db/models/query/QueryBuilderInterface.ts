interface QueryBuilderInterface {
    getQuery(): string;
    where(data: object): QueryBuilderInterface;
    // select(data: object): string;
    // limit(data: object): string;
    // offset(data: object): string;
    // sort(data: object): string;
    // order(data: object): string;
}

export default QueryBuilderInterface;