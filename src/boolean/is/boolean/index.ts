// @ts-ignore
function isBoolean (x: boolean): true;

// @ts-ignore
function isBoolean (x: unknown): x is boolean;

// @ts-ignore
const isBoolean = (x: unknown) => x === false || x === true;
export default isBoolean;
