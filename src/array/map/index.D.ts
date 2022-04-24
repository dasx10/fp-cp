import type { placeholder } from "../../index";
import type { Index, Unboxing, UnTypeArray } from "../index.D";

type DefMap <
	Value,
	Return = any,
	Values extends readonly Value[] = Value[]
> = 
	((value: Unboxing<Values>, index: Index<Values>, array: Values) => Return) |
	((value: Value, index: number) => Return) |
	((value: Value) => Return);

export type ArrayMapDef = {
  <Return, X extends readonly any[]> (def: (value: Unboxing<X>, index: Index<X>, array: Readonly<X>) => Return, x: X): UnTypeArray<Return, X>;
  <Value, Return>(def: DefMap<Value, Return>): <X extends readonly Value[]>(x: X) => UnTypeArray<Return, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Return>(def: (value: Unboxing<X>, index: Index<X>, array: Readonly<X>) => Return) => UnTypeArray<Return, X>;
}
