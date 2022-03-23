import { ArrayReverse } from "../reverse/index.D";

export type At <
  Index extends number,
  X extends readonly any[]
> = number extends Index
? X extends readonly (infer E)[]
  ? E | undefined
  : undefined
: X extends readonly [any, ...any]
  ? `${Index}` extends `-${infer Invert}`
    // @ts-ignore
    ? [undefined, ...ArrayReverse<X>][Invert]
    : X[Index]
    : X extends readonly (infer E)[]
      ? E | undefined
      : undefined;
