import type { ArrayLikeEveryRightDef } from "./contract/index.D";
import type { ArrayLikeEveryRightLib } from "./lib/index.D";

export type ArrayLikeEveryRightMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeEveryRightDef<Type>
	& ArrayLikeEveryRightLib<Type>;
