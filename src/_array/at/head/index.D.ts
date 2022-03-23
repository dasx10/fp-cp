export type Head <X extends readonly any[]> = X extends readonly [infer F, ...infer N]
  ? F
  : X extends readonly (infer T)[]
    ? T | undefined
    : undefined;
