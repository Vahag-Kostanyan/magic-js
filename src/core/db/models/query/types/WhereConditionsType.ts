export type AndWhereCondition = {
    column: string;
    action: string;
    value: string;
    condition?: "AND";
};

export type OrWhereCondition = {
    column: string;
    action: string;
    value: string;
    condition?: "OR";
};

export type WhereConditionsType = AndWhereCondition | OrWhereCondition;

export type whereConditionsArrayType  = WhereConditionsType[];