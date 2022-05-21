import type { ArrayLikeAtLastMain } from './../at/last/index.D';
import type { ArrayLikeLastLib }    from "./lib/index.D";

export type ArrayLikeLastMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeAtLastMain <Type> 
	& ArrayLikeLastLib  <Type>;
