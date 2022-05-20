import type { ArrayAt } from "../../../src/array/at/core/index.D";
import type { Chars } from "../chars/index.D";

export type At <Index extends number, X extends string> = ArrayAt<Index, Chars<X>>
