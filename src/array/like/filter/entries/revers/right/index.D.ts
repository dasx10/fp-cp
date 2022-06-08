import type { ArrayLikeFilterEntriesReversRightLib } from './lib/index.D';
import type { ArrayLikeFilterEntriesReversRightDef } from "./contract/index.D";

export type ArrayLikeFilterEntriesReversRightMain<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterEntriesReversRightDef<Type> &
	ArrayLikeFilterEntriesReversRightLib<Type>;
