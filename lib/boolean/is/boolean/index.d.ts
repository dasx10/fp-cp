declare function isBoolean(x: boolean): true;
declare function isBoolean(x: unknown): x is boolean;
export default isBoolean;
