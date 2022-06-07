import type { ArrayLikeIndexOfDef } from './../../../index/of/contract/index.D';

export interface ArrayLikeLastIndexLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	of: ArrayLikeIndexOfDef <Type>,
}
