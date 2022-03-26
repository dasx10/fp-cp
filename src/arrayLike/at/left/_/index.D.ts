import { ArrayLikeUnboxing } from "../../../index.D";

export type AtLeft <Index extends number, X extends ArrayLike<any>> = number extends Index
  ? ArrayLikeUnboxing<X> | undefined
  : X extends [...infer Values]
    ? Values[Index]
    : ArrayLikeUnboxing<X> | undefined;
