export declare type QueryPointers<Query extends string, Params extends string[] = []> = string extends Query ? string[] : Query extends '' ? [] & Array<string> : Query extends `${infer QueryParam}&${infer NextQuery}` ? QueryPointers<NextQuery, [...Params, QueryParam]> : [...Params, Query];
declare function queryPointers<Query extends string>(query: Query): QueryPointers<Query, []> | ([] & string[]);
export default queryPointers;
