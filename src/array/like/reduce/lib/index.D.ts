import type { ArrayLikeReduceRightMain } from '../right/index.D';
import type { ArrayLikeReduceCore }      from './../core/index.D';

export interface ArrayLikeReduceLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>>{
	readonly core  : ArrayLikeReduceCore      <Type>;
	readonly right : ArrayLikeReduceRightMain <Type>;
}
