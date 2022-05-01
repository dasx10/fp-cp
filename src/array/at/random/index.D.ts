import { ArrayValue } from "../../index.D";

export type AtRandomDef = <X extends any[]> (x: X) => X extends [] ? undefined : ArrayValue<X>;
