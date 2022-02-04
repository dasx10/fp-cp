declare function isEmptyString(value: ''): true;
declare function isEmptyString(value: string): false;
declare function isEmptyString(value: unknown): value is '';
export default isEmptyString;
