import { All } from "../../../is/index.D";

// @ts-ignore
function isTrue <X extends Exclude<All, true>>(x: X): false;
// @ts-ignore
function isTrue (x: true): true;
// @ts-ignore
function isTrue (x: unknown): x is true;

// @ts-ignore
const isTrue = <X extends boolean>(x: X) => x === true;

export default isTrue;
