import type { placeholder }     from './../../index';
import type { Index, Unboxing } from "../index.D"
import type { FindIndexDef, FindIndexLib }    from './index/index.D';

type FindCore = <X extends readonly any[]>(def: (value: Unboxing<X>, index: Index<X>, array: X) => any, X: X) => Unboxing<X> | undefined;

export type FindDef = FindCore & {
  <Value>(def: (value: Value, index: number, array: Value[]) => any): <X extends readonly Value[]>(x: X) => Unboxing<X> | undefined;
  <X extends readonly any[]>(_: placeholder, X: X): (def: (value: Unboxing<X>, index: Index<X>, array: X) => any) => Unboxing<X> | undefined;
}


export type FindLib = FindDef & {
  core : FindCore,
  right: FindDef & {
    index: FindIndexDef,
  },
  index: FindIndexLib,
};
