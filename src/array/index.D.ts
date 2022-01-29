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

export type ArrayFirstElement<InputArray extends any[]>  = InputArray extends [infer FirstElement, ...infer NextElements] ? FirstElement : never;
export type ArraySecondElement<InputArray extends any[]> = InputArray extends [infer FirstElement, infer SecondElement, ...infer NextElements] ? SecondElement : never;