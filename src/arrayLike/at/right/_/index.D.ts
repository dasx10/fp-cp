import type { ArrayLikeUnboxing } from "../../../index.D";

export type AtRight <Index extends number, X extends ArrayLike<any>> = number extends Index
  ? X extends [...infer Values]
    ? Values[Index]
    : ArrayLikeUnboxing<X> | undefined
  : ArrayLikeUnboxing<X> | undefined;
