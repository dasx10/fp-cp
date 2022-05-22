import type { ArrayLikeAtFirstEntryCore } from './../entry/index.D';
import type { ArrayLikeAtFirstIndexCore } from "../index/index.D";

export interface ArrayLikeAtFirstLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly index: ArrayLikeAtFirstIndexCore <Type>;
	readonly entry: ArrayLikeAtFirstEntryCore <Type>;
}
