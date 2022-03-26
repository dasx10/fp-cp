export type Head <X extends ArrayLike<any>> = X extends readonly [infer F, ...any[]]
  ? F
  : X extends `${infer F}${string}` 
    ? F
    : X extends ArrayLike<infer T>
      ? T | undefined
      : undefined;
