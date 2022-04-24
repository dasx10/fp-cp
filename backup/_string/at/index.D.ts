import type { At as AtElement } from "../../array/at/index.D";
import type { Chars } from "../chars/index.D";

export type At <Index extends number, X extends string> = AtElement<Index, Chars<X>>
