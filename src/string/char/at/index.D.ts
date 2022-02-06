export type CharOf<Value extends string> = string extends Value
  ? string
  : Value extends `${infer Char}${infer NextChars}`
    ? NextChars extends ''
      ? Char
      : Char | CharOf<NextChars>
    : Value;
