declare function countOfAny<T extends [any, ...any[]]>(...searchValues: T): (array: T extends (infer U)[] ? U[] : []) => number;
export default countOfAny;
