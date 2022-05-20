export type ArrayHead <X extends readonly any[]> = X extends readonly [infer F, ...any[]]
  ? F
  : X extends readonly (infer T)[]
    ? T | undefined
    : undefined;

export type ArrayHeadDef = <X extends readonly any[]>(x: X) => ArrayHead<X>;
