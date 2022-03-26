import { AcceptString, ToString } from "../../../string/index.D";


type _Join <X extends readonly any[], SEPARATOR extends string = ''> = X extends readonly [infer F, ...infer N]
  ? N extends [any, ...any]
    ? `${ToString<F>}${SEPARATOR}${_Join<N, SEPARATOR>}`
    : ToString<F>
  : X extends readonly [infer V]
    ? ToString<V>
    : '';

export type Join <X extends readonly any[], SEPARATOR extends AcceptString = ''> = X extends readonly [infer F, ...infer Strings]
  // @ts-ignore
  ? Strings extends [any, ...any]
    ? `${ToString<F>}${SEPARATOR}${_Join<Strings, ToString<SEPARATOR>>}`
    : ToString<F>
  : string;
