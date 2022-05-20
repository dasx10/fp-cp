import type { ExcludeFloat, ExcludeNegative, ExcludePositive } from "../../number/index.D";

export type KeyIndex = number | `${number}`;

export type ToIndex       <X extends number> = (ExcludeFloat<X>);
export type ToIndexDirect <X extends number> = (ToIndex<X> & ExcludeNegative<X>);
export type ToIndexInvert <X extends number> = (ToIndex<X> & ExcludePositive<X>);
