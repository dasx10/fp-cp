// @ts-ignore
function isString (x: string): true;
// @ts-ignore
function isString (x: unknown): x is string;
// @ts-ignore
const isString = (x: unknown) => typeof x === 'string';
export default isString;
