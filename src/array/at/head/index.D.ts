<<<<<<< HEAD
export type Head <Tuple extends readonly any[]> = Tuple extends [infer F, ...infer N] 
? F
: Tuple extends (infer T)[]
  ? T | undefined
  : unknown;
=======
export type Head <X extends readonly any[]> = X extends readonly [infer F, ...infer N]
  ? F
  : X extends readonly (infer T)[]
    ? T | undefined
    : undefined;
>>>>>>> 4bb63769e5dbc2d27c8ab0f3e6f3629910d82340
