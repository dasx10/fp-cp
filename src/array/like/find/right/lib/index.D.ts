import type { ArrayLikeFindRightCore }      from './../core/index.D';
import type { ArrayLikeFindEntryRightMain } from '../../entry/right/index.D';
import type { ArrayLikeFindIndexRightMain } from '../../index/right/index.D';

export interface ArrayLikeFindRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeFindRightCore     <Type>;
	readonly index : ArrayLikeFindIndexRightMain<Type>;
	readonly entry : ArrayLikeFindEntryRightMain<Type>
}
