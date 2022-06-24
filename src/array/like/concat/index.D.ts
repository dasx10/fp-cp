import type { ArrayLikeConcatDef } from "./contract/index.D";
import type { ArrayLikeConcatLib } from "./lib/index.D";

export type ArrayLikeConcatMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeConcatDef<Type> &
	ArrayLikeConcatLib<Type> ;
