export type Tail <X extends readonly any[]> = X extends readonly [...infer F, infer L]
  ? L
  : X extends readonly (infer T)[]
    ? T | undefined
    : undefined;
