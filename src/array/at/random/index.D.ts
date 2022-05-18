import type { ArrayValue } from "../../index.D";
export type ArrayAtRandomDef = <X extends any[]> (x: X) => X extends [] ? undefined : ArrayValue<X>;
