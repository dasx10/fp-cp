import { AtRightDef } from './right/index.D';
import { TupleReverse } from "../reverse/index.D";

export type At <
  Index extends number | `${number}`,
  X extends readonly any[]
> = number extends Index
? X extends readonly (infer E)[]
  ? E | undefined
  : undefined
: X extends readonly [any, ...any]
  ? `${Index}` extends `-${infer Invert}`
  // @ts-ignore
  ? [undefined, ...TupleReverse<X>][Invert]
    // @ts-ignore
    : X[Index]
    : X extends readonly (infer E)[]
      ? E | undefined
      : undefined;


export type ArrayAtDef = {
  <Index extends number, X extends any[]>(index: Index, x: X): At<Index, X>;
  <Index extends number>(index: Index): <X extends any[]>(x: X) => At<Index, X>;
  right: AtRightDef,
}
