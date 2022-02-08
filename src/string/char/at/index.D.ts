import { Chars, CharsReverse } from "../../chars/index.D";

export type CharOf<Value extends string> = string extends Value
  ? string
  : Value extends `${infer Char}${infer NextChars}`
    ? NextChars extends ''
      ? Char
      : Char | CharOf<NextChars>
    : Value;

export type CharAt<Value extends string, Index extends number = number> = string extends Value
    ? string | ''
    : `${Index}` extends `-${infer Reverse}`
        // @ts-ignore
        ? ['', ...CharsReverse<Value>][Reverse] extends undefined ? '' : ['', ...CharsReverse<Value>][Reverse]
        : Chars<Value>[Index] extends undefined ? '' : Chars<Value>[Index];
