import type { ArrayLikeFindIndexRightDef } from '../../index/right/contract/index.D';
import type { ArrayLikeFindRightCore } from './../core/index.D';

export interface ArrayLikeFindRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core  : ArrayLikeFindRightCore    <Type>;
	index : ArrayLikeFindIndexRightDef<Type>;
}
