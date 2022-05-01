import { ArrayLikeValue } from "../../../index.D";

export type AtLeft <Index extends number, X extends ArrayLike<any>> = number extends Index
  ? ArrayLikeValue<X> | undefined
  : X extends [...infer Values]
    ? Values[Index]
    : ArrayLikeValue<X> | undefined;
