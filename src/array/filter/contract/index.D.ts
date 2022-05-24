import type { __ }                     from './../../../index';
import type { ArrayFilter }            from './../core/index.D';
import type { ArrayValue, ArrayIndex } from './../../index.D';
import type { ArrayFilterCore }        from "../core/index.D";

export type ArrayFilterDef <Type = unknown> = ArrayFilterCore & {
	<Value extends Type, WaitArray extends readonly Value[]>(def: (value: Value & ArrayValue<WaitArray>, index: ArrayIndex<WaitArray>, array: WaitArray & readonly Value[]) => unknown): <X extends WaitArray>(x: X) => ArrayFilter<X> 
	<X extends readonly Type[]>(_:__, x: X): (def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => unknown) => ArrayFilter<X>;
}
