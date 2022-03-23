import { Unboxing } from "../../index.D";

export type ArraySkip <Index extends number, X extends readonly any[]> = Unboxing<X>[];
