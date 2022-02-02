export declare type CharOf<Value extends string> = Value extends `${infer Char}${infer NextChars}` ? NextChars extends `${infer F}${infer U}` ? Char | CharOf<NextChars> : Char : string;
