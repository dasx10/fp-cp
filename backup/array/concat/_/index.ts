import type { ConcatCore } from "./index.D";
const _concat: ConcatCore = <Y extends readonly any[], X extends readonly any[]>(y: Y, x: X): [...X, ...Y] => [...x, ...y];
export default _concat;
