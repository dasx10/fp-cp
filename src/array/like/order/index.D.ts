import type { ArrayLikeOrderCore } from "./core/index.D";
import type { ArrayLikeOrderLib } from "./lib/index.D";

export type ArrayLikeOrderMain <Type extends ArrayLike<unknown> = ArrayLike<unknown>> =
	ArrayLikeOrderCore <Type> &
	ArrayLikeOrderLib  <Type>;
