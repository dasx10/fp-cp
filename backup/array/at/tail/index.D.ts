export type ArrayTail <Tuple extends readonly any[]> = Tuple extends [...any, infer L]
? L
: Tuple extends (infer T)[]
  ? (T | undefined)
  : unknown;

export type ArrayTailDef = <X extends readonly any[]>(x: X) => ArrayTail<X>;
