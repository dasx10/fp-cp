import Array from ".";
import { ArrayReverse } from "./reverse/index.D";

export type ArrayIterateFunction<ArrayElement = any, Return = any> = (element: ArrayElement, index: number, array: ArrayElement[]) => Return;

export type TupleConsistentEvery<Tuple extends any[]> = Tuple extends [infer First, ...infer Next] ? [First] | [First, ...TupleConsistentEvery<Next>] : [];
export type TupleConsistent<Tuple extends any[]> = Tuple extends [infer First, ...infer Next] ? [] | [First] | [First, ...TupleConsistentEvery<Next>] : [];

export type TupleDifference<
Tuple      extends any[],
Difference extends any[]
> = Difference extends [infer DifferenceFirst, ...infer DifferenceNext] 
? Tuple extends [infer First, ...infer Next]
? First extends DifferenceFirst ? TupleDifference<Next, DifferenceNext>
: DifferenceNext
: Difference
: [];

export type ArrayTypes<Tuple extends any[]> = Tuple extends Array<infer T, infer Predicate>
    ? Predicate
    : Tuple;


// export type LastElement<Tuple extends any[]>   = FirstElement<Reverse<Tuple>>;

export type ArrayType<Tuple extends any[] | Array<any>> = Tuple extends Array<infer T, infer P> ? T : Tuple extends (infer Type)[] ? Type : never;
export type ArrayFirstElement<InputArray extends any[] | Array<any>>  = InputArray extends [infer FirstElement, ...infer NextElements] ? FirstElement : never;
export type ArraySecondElement<InputArray extends any[] | Array<any>> = InputArray extends [infer FirstElement, infer SecondElement, ...infer NextElements] ? SecondElement : never;
export type ArrayLastElement<Tuple extends any[] | Array<any>> = ArrayFirstElement<ArrayReverse<Tuple>>;