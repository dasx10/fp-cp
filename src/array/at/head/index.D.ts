export type Head <Tuple extends readonly any[]> = Tuple extends readonly [infer F, ...infer N] 
? F
: Tuple extends readonly (infer T)[]
  ? T | undefined
  : unknown;
