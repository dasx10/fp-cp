export type QueryPointers<
  Query extends string,
  Params extends string[] = []
> = string extends Query
? string[]
: Query extends ''
  ? [] & Array<string>
  : Query extends `${infer QueryParam}&${infer NextQuery}`
    ? QueryPointers<NextQuery, [...Params, QueryParam]>
    : [...Params, Query];


function queryPointers<Query extends string> (query: Query) {
  if (query) return query.split('&') as QueryPointers<Query>;
  return [] as [] & Array<string>;
}

export default queryPointers;
