import type { All } from "../../../../is/index.D";

export type AddRightCore = <Value extends All, X extends readonly any[]>(value: Value, x: X) => [...X, Value];
