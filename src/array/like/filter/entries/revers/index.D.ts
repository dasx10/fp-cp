import type { ArrayLikeFilterEntriesReversDef } from "./contract/index.D";
import type { ArrayLikeFilterEntriesReversLib } from "./lib/index.D";

export type ArrayLikeFilterEntriesReversMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	ArrayLikeFilterEntriesReversDef<Type> &
	ArrayLikeFilterEntriesReversLib<Type> 
