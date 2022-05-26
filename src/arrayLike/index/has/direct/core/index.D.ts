import type { ArrayLikeIndex } from "../../../../index.D";
import type { ToIndexDirect }  from "../../../index.D";

export type ArrayLikeIndexHasDirectCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	Index extends ArrayLikeIndex<X>,
	X     extends Type
> (index: ToIndexDirect<Index>, x: X) => boolean;
