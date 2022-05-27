import type { ArrayLikeFindEntryCore }      from "../core/index.D";
import type { ArrayLikeFindEntryRightMain } from "../right/index.D";

export interface ArrayLikeFindEntryLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeFindEntryCore      <Type>;
	readonly right : ArrayLikeFindEntryRightMain <Type>;
}
