export type CharsOf<Value extends string> = Value extends `${infer Char}${infer NextChars}`
? NextChars extends `${infer F}${infer U}`
    ? [Char, ...CharsOf<NextChars>]
    : [Char]
: string[];