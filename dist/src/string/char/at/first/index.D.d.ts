export declare type FirstChar<Value extends string> = Value extends `${infer FirstChar}${infer NextChars}` ? FirstChar : string;
