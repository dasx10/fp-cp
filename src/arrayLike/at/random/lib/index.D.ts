import type { ArrayLikeAtRandomIndexCore } from '../index/index.D';
import type { ArrayLikeAtRandomEntryCore } from './../entry/index.D';

export interface ArrayLikeAtRandomLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	entry: ArrayLikeAtRandomEntryCore <Type>;
	index: ArrayLikeAtRandomIndexCore <Type>;
}
