import type { placeholder } from "../../index";
import type { ArrayIndex, ArrayValue, UnTypeArray } from "../index.D";

type DefMap <
	Value,
	Return = any,
	Values extends readonly Value[] = Value[]
> = 
	((value: Value, index: ArrayIndex<Values>, array: Values) => Return) |
	((value: Value, index: number) => Return) |
	((value: Value) => Return);

export type ArrayMapDef = {
  <Return, X extends readonly any[]> (def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: Readonly<X>) => Return, x: X): UnTypeArray<Return, X>;
  <Value, Return>(def: DefMap<Value, Return>): <X extends readonly Value[]>(x: X) => UnTypeArray<Return, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Return>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: Readonly<X>) => Return) => UnTypeArray<Return, X>;
}
