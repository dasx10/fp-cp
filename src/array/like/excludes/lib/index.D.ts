import type { ArrayLikeExcludesLastMain } from '../last/index.D';
import type { ArrayLikeExcludesCore }     from './../core/index.D';

export interface ArrayLikeExcludesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeExcludesCore     <Type>;
	readonly last: ArrayLikeExcludesLastMain <Type>;
}
