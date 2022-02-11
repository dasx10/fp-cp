export type Head <Tuple extends readonly any[]> = Tuple extends [infer F, ...infer N] 
? F
: Tuple extends (infer T)[]
  ? T | undefined
  : unknown;
