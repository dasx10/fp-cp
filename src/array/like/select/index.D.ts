import type { ArrayLikeSelectLib } from './lib/index.D';
import type { ArrayLikeSelectDef } from './contract/index.D';

export type ArrayLikeSelectMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeSelectDef<Type> & 
	ArrayLikeSelectLib<Type> ;
