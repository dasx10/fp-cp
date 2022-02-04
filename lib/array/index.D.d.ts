import type { ArrayReverse } from './reverse/index.D';
export declare type ArrayIterateFunction<ArrayElement = any, Return = any> = (element: ArrayElement, index: number, array: ArrayElement[]) => Return;
export declare type TupleConsistentEvery<Tuple extends any[]> = Tuple extends [infer First, ...infer Next] ? [First] | [First, ...TupleConsistentEvery<Next>] : [];
export declare type TupleConsistent<Tuple extends any[]> = Tuple extends [infer First, ...infer Next] ? [] | [First] | [First, ...TupleConsistentEvery<Next>] : [];
export declare type TupleDifference<Tuple extends any[], Difference extends any[]> = Difference extends [infer DifferenceFirst, ...infer DifferenceNext] ? Tuple extends [infer First, ...infer Next] ? First extends DifferenceFirst ? TupleDifference<Next, DifferenceNext> : DifferenceNext : Difference : [];
export declare type ArrayType<Tuple extends any[]> = Tuple extends (infer Type)[] ? Type : never;
export declare type ArrayFirstElement<InputArray extends any[]> = InputArray extends [infer FirstElement, ...infer _] ? FirstElement : never;
export declare type ArraySecondElement<InputArray extends any[]> = InputArray extends [infer _, infer SecondElement, ...infer _] ? SecondElement : never;
export declare type ArrayLastElement<Tuple extends any[]> = ArrayFirstElement<ArrayReverse<Tuple>>;
