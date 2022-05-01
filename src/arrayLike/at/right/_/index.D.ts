import type { ArrayLikeValue } from "../../../index.D";

export type AtRight <Index extends number, X extends ArrayLike<any>> = number extends Index
  ? X extends [...infer Values]
    ? Values[Index]
    : ArrayLikeValue<X> | undefined
  : ArrayLikeValue<X> | undefined;
