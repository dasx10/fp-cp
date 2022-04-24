export type TupleReverse<
  Tuple     extends readonly any[],
  Recursive extends readonly any[] = []
> = Tuple extends readonly [infer F, ...infer L]
  ? TupleReverse<L, [F, ...Recursive]>
  : Recursive;

export type ArrayReverse<Tuple extends readonly any[]> = Tuple extends readonly [infer F, ...infer L]
  ? TupleReverse<L, [F]>
  : Tuple;
