import { ToString } from "../../../string/index.D";

type _JoinUp <X extends readonly any[]> = X extends readonly [infer F, ...infer N]
  ? `${ToString<F>}${_JoinUp<N>}`
  : X extends readonly [infer V]
    ? ToString<V>
    : '';

export type JoinUp <X extends readonly any[]> = X extends readonly [infer F,...infer Strings]
  ? `${ToString<F>}${_JoinUp<Strings>}`
  : string;
