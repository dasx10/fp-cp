import { ArrayReverse } from "../reverse/index.D";

export type At <Index extends number, X extends any[] | readonly any[]> = number extends Index
? X extends (infer E)[] | readonly (infer E)[]
  ? E
  : unknown
: X extends [any, ...any] | readonly [any, ...any]
  ? `${Index}` extends `-${infer Invert}`
    // @ts-ignore
    ? [undefined, ...ArrayReverse<X>][Invert]
    : X[Index]
    : X extends (infer E)[] | readonly (infer E)[]
      ? E | undefined
      : undefined;
