import type { ArrayLikeIncludesCore }     from './../core/index.D';
import type { ArrayLikeIncludesLastMain } from '../last/index.D';


export interface ArrayLikeIncludesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeIncludesCore     <Type>;
	readonly last: ArrayLikeIncludesLastMain <Type>;
}
