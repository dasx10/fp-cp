import type { ArrayLikeIndexOfLastMain } from '../last/index.D';
import type { ArrayLikeIndexOfCore }     from './../core/index.D';

export interface ArrayLikeIndexOfLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core : ArrayLikeIndexOfCore    <Type>;
	readonly last : ArrayLikeIndexOfLastMain<Type>;
}
