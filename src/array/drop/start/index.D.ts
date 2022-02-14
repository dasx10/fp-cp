export type DropStart <Tuple extends readonly any[]> = Tuple extends readonly [any, ...infer N]
? N
: Tuple;
