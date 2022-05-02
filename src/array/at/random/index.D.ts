import { ArrayValue } from "../../index.D";

export type AtArrayRandom = <X extends any[]> (x: X) => X extends [] ? undefined : ArrayValue<X>;
