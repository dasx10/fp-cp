export type Tail <Tuple extends readonly any[]> = Tuple extends [...infer N, infer L]
? L
: Tuple extends (infer T)[]
  ? (T | undefined)
  : unknown;

export type TailDef = <X extends readonly any[]>(x: X) => Tail<X>;
