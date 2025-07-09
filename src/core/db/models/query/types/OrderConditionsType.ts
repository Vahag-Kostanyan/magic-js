export type OrderDescCondition = {
    column: string;
    value: "DESC";
};

export type OrderAscCondition = {
    column: string;
    value: "ASC";
};

export type OrderConditionsType = OrderDescCondition | OrderAscCondition;

export type OrderConditionsArrayType  = OrderConditionsType[];