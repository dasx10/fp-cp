import type { ArrayLikeIncludesLastDef } from './contract/index.D';
import type { ArrayLikeIncludesLastLib } from './lib/index.D';

export type ArrayLikeIncludesLastMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> =
	ArrayLikeIncludesLastDef <Type> & 
	ArrayLikeIncludesLastLib <Type>;
