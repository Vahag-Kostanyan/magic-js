import QueryBuilderInterface from "../query/types/QueryBuilderInterface";

export interface ModelInterface 
{
    find(): QueryBuilderInterface;
}