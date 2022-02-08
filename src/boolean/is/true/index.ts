// @ts-ignore
function isTrue (x: true): true;
// @ts-ignore
function isTrue (x: false): false;
// @ts-ignore
function isTrue (x: boolean): boolean;
// @ts-ignore
function isTrue (x: unknown): x is true;

// @ts-ignore
const isTrue = <X extends boolean>(x: X) => x === true;

export default isTrue;
