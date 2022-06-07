import type { ArrayIndex } from "../array/index.D";
import type { Char }  from "./char/index.D";
import type { Chars } from "./chars/index.D";
import type { StringCore } from "./core/index.D";
import type { StringLib } from "./lib/index.D";

export type AcceptString                                         = string | boolean | number | bigint | null | undefined;

export type StringIndex   <X extends string>                     = string extends X ? number : ArrayIndex<Chars<X>>;
export type StrIterate <X extends string = string, R = unknown>  = (char: Char<X>, index: StringIndex<X>, string: X) => R;
export type ToString   <X>                                       = X extends AcceptString ? `${X}` : string;


export type StringMain = StringCore;
