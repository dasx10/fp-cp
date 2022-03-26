export type Head <X extends readonly any[]> = X extends readonly [infer F, ...any[]]
  ? F
  : X extends readonly (infer T)[]
    ? T | undefined
    : undefined;

export type HeadDef = <X extends readonly any[]>(x: X) => Head<X>;
