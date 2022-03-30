import type { Unboxing }         from './../../index.D';
import type { FilterMapIterate } from "../index.D";

export type FilterCore = <X extends readonly any[]>(def: FilterMapIterate<X>, array: X) => Unboxing<X>[]
