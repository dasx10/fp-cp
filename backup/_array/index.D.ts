// /* eslint-disable @typescript-eslint/no-unused-vars */
// import type { ArrayReverse } from './reverse/index.D';

// export type IterateDef<
//   ArrayElement = any,
//   Return       = any,
// > = (element: ArrayElement, index: number, array: readonly ArrayElement[]) => Return;

// export type TupleConsistentEvery<
//   Tuple extends any[],
// > = Tuple extends [infer First, ...infer Next]
//   ? [First] | [First, ...TupleConsistentEvery<Next>]
//   : [];

// export type TupleConsistent<
//   Tuple extends any[],
// > = Tuple extends [infer First, ...infer Next]
//   ? [] | [First] | [First, ...TupleConsistentEvery<Next>]
//   : [];

// export type TupleDifference<
// 	Tuple      extends any[],
// 	Difference extends any[],
// > = Difference extends [infer DifferenceFirst, ...infer DifferenceNext]
//   ? Tuple extends [infer First, ...infer Next]
//     ? First extends DifferenceFirst ? TupleDifference<Next, DifferenceNext>
//       : DifferenceNext
//     : Difference
//   : [];

// // export type LastElement<Tuple extends any[]>   = FirstElement<Reverse<Tuple>>;

// export type ArrayType<
//   Tuple extends any[],
// > = Tuple extends (infer Type)[]
//     ? Type
//     : never;

// export type ArrayFirstElement<
//   InputArray extends any[],
// > = InputArray extends [infer FirstElement, ...infer _]
//   ? FirstElement
//   : never;

// export type ArraySecondElement<
//   InputArray extends any[],
// > = InputArray extends [infer _, infer SecondElement, ...infer _]
//   ? SecondElement
//   : never;

// export type ArrayLastElement<
//   Tuple extends any[],
// > = ArrayFirstElement<ArrayReverse<Tuple>>;
