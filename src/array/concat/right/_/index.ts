import type { ConcatRightCore } from "./index.D";
const _concatRight: ConcatRightCore = <Y extends readonly any[], X extends readonly any[]>(y: Y, x: X): [...Y, ...X] => [...y, ...x];
export default _concatRight;
