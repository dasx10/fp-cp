import type { Chars } from "../../../string/chars/index.D";

export type Tail <X extends ArrayLike<any>> = X extends readonly [...any, infer Last]
  ? Last
  : X extends `${infer Last}`
    ? Tail<Chars<Last>>
    : X extends ArrayLike<infer T>
      ? T | undefined
      : unknown;
