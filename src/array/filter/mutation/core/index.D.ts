import { ArrayValue, ArrayIndex } from './../../../../../backup/array/index.D';
export type ArrayFilterMutationCore <Type = unknown> = <X extends Array<Type>>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => unknown, x: CheckMutation<X>) => X;
export type CheckMutation <X extends Array<unknown>> = ArrayValue<X>[] extends X ? X : never; 
