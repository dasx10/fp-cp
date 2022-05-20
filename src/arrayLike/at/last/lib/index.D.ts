import type { ArrayLikeAtLastEntryCore } from "../entry/index.D";
import type { ArrayLikeAtLastIndexCore } from "../index/index.D";

export interface ArrayLikeAtLastLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	entry: ArrayLikeAtLastEntryCore <Type>;
	index: ArrayLikeAtLastIndexCore <Type>;
}
