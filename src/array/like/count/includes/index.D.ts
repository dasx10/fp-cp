import type { ArrayLikeCountIncludesDef } from "./contract/index.D";
import type { ArrayLikeCountIncludesLib } from "./lib/index.D";

export type ArrayLikeCountIncludesMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeCountIncludesDef <Type> &
	ArrayLikeCountIncludesLib <Type>;
