import { ToIndexDirect } from "../../arrayLike/index/index.D";
import type { placeholder } from "../../index";

import type {
	ArrayIndex,
	ArrayValue,
	TupleIndex
} from "../index.D";


// Universal

export type TupleCount <X extends readonly any[]> = X extends readonly [...infer X0]
	? X0['length'] | TupleIndex<X0>
	: 0;


export type ArrayCount <X extends readonly any[]> = X extends readonly [...infer X0]
	? X0['length'] | TupleIndex<X0>
	: X extends readonly [] ? 0 : ToIndexDirect<number>;


// Defined

export type ArrayCountCore = <X extends readonly any[]>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, x: X) => any, x: X) => ArrayCount<X>;

export type ArrayCountDef = ArrayCountCore & {
	<Value>(def: (value: Value, index: number, x: Value[]) => any): <X extends readonly Value[]>(x: X) => ArrayCount<X>;
	<X extends readonly any[]>(_: placeholder, x: X): (def: (value: ArrayValue<X>, index: ArrayIndex<X>, x: X) => any) => ArrayCount<X>;
	core: ArrayCountCore;
}
