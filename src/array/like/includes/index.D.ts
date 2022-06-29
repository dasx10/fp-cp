import type { ArrayLikeIncludesLib } from './lib/index.D';
import type { ArrayLikeIncludesDef } from './contract/index.D';

export type ArrayLikeIncludesMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> =
	ArrayLikeIncludesDef <Type> &
	ArrayLikeIncludesLib <Type>;
