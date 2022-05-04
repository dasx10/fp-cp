import type { ExcludeFloat, ExcludeNegative, ExcludePositive } from "../../number/index.D";

export type ToIndex      <X extends number> = (ExcludeFloat<X>);
export type ToIndexLeft  <X extends number> = (ToIndex<X> & ExcludeNegative<X>);
export type ToIndexRight <X extends number> = (ToIndex<X> & ExcludePositive<X>);
