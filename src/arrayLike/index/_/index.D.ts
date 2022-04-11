import type { ToIndexRight } from "../index.D";

export type IndexDef = (x: ArrayLike<any>) => ToIndexRight<number> | -1;
