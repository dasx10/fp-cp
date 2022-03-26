import type { Index } from "../array/index.D";
import type { Char }  from "./char/index.D";
import type { Chars } from "./chars/index.D";

export type AcceptString                                    = string | boolean | number | bigint | null | undefined;

export type StrIndex   <X extends string>                   = string extends X ? number : Index<Chars<X>>;
export type StrIterate <X extends string = string, R = any> = (char: Char<X>, index: StrIndex<X>, string: X) => R;
export type ToString   <X>                                  = X extends AcceptString ? `${X}` : string;
