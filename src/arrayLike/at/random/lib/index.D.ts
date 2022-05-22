import type { ArrayLikeAtRandomIndexCore } from '../index/index.D';
import type { ArrayLikeAtRandomEntryCore } from './../entry/index.D';

export interface ArrayLikeAtRandomLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly entry: ArrayLikeAtRandomEntryCore <Type>;
	readonly index: ArrayLikeAtRandomIndexCore <Type>;
}
