import { IS_TRUE } from "./index.D";

// @ts-ignore
function isTrue <X>(x: X): IS_TRUE<X>;
// @ts-ignore
function isTrue (x: unknown): x is true;

// @ts-ignore
const isTrue = <X extends boolean>(x: X) => x === true;

export default isTrue;
