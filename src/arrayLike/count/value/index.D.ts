import type { ArrayLikeCountValueLib } from './lib/index.D';
import type { ArrayLikeCountValueDef } from "./contract/index.D";

export type ArrayLikeCountValueMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeCountValueDef <Type>
	& ArrayLikeCountValueLib <Type>;
