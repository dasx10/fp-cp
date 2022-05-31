export type Chars <StringValue extends string> = string extends StringValue
  ? string[] | []
  : StringValue extends ''
		? []
		: StringValue extends `${infer Char}${infer NextChars}`
      ? NextChars extends ''
        ? Char extends ''
					? []
					: [Char]
      : [Char, ...Chars<NextChars>]
    : [StringValue];
