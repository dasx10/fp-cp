import type { ToIndexInvert }  from "../../../index.D";

export type ArrayLikeIndexHasInvertCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	Index extends number,
	X     extends Type
> (index: ToIndexInvert<Index>, x: X) => boolean;
