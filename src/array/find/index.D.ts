import type { placeholder }     from './../../index';
import type { ArrayIndex, ArrayValue } from "../index.D"
import type { FindIndexDef, FindIndexLib }    from './index/index.D';

type FindCore = <X extends readonly any[]>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => any, X: X) => ArrayValue<X> | undefined;

export type FindDef = FindCore & {
  <Value>(def: (value: Value, index: number, array: Value[]) => any): <X extends readonly Value[]>(x: X) => ArrayValue<X> | undefined;
  <X extends readonly any[]>(_: placeholder, X: X): (def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => any) => ArrayValue<X> | undefined;
}


export type FindLib = FindDef & {
  core : FindCore,
  right: FindDef & {
    index: FindIndexDef,
  },
  index: FindIndexLib,
};
