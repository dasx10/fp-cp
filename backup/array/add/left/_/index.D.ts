import type { All } from "../../../../is/index.D";

export type AddLeftCore = <Value extends All, X extends readonly any[]>(value: Value, x: X) => [Value, ...X];
