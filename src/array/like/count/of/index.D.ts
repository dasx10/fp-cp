import type { ArrayLikeCountOfLib } from './lib/index.D';
import type { ArrayLikeCountOfDef } from "./contract/index.D";

export type ArrayLikeCountOfMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeCountOfDef <Type> &
	ArrayLikeCountOfLib <Type>;
