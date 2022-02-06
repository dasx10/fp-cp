// @ts-ignore
function isFalse (x: true): false;
// @ts-ignore
function isFalse (x: false): true;
// @ts-ignore
function isFalse (x: boolean): boolean;
// @ts-ignore
function isFalse (x: unknown): x is false;

// @ts-ignore
const isFalse = <X extends boolean>(x: X) => x === false;
export default isFalse;
