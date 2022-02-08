declare function isString(x: string): true;
declare function isString(x: unknown): x is string;
export default isString;
