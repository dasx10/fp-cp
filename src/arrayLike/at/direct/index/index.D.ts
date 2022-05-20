import type { ArrayLikeAtDirectIndexDef } from "./contract/index.D";
import type { ArrayLikeAtDirectIndexLib } from "./lib/index.D";

export type ArrayLikeAtDirectIndexMain <Type extends Record<number, unknown> = Record<number, unknown>> = 
	ArrayLikeAtDirectIndexDef<Type>
	& ArrayLikeAtDirectIndexLib<Type>;
