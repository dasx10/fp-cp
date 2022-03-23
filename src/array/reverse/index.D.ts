type _TupleReverse<
  Tuple     extends readonly any[],
  Recursive extends readonly any[] = []
> = Tuple extends [infer F, ...infer L]
  ? _TupleReverse<L, [F, ...Recursive]>
  : Recursive;

export type TupleReverse<Tuple extends readonly any[]> = Tuple extends readonly [infer F, ...infer L]
  ? _TupleReverse<L, [F]>
  : Tuple;
