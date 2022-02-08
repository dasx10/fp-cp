export declare type Chars<StringValue extends string> = string extends StringValue ? string[] : StringValue extends `${infer Char}${infer NextChars}` ? NextChars extends '' ? [Char] : [Char, ...Chars<NextChars>] : [StringValue];
export declare type CharsReverse<StringValue extends string> = string extends StringValue ? string[] : StringValue extends `${infer Char}${infer NextChars}` ? NextChars extends '' ? [Char] : [...CharsReverse<NextChars>, Char] : [StringValue];
