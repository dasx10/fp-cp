import type { ArrayLikeEveryLib } from './lib/index.D';
import type { ArrayLikeEveryDef } from "./contract/index.D";

export type ArrayLikeEveryMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeEveryDef<Type>
	& ArrayLikeEveryLib<Type>;
