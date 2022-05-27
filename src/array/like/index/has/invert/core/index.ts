import type { ToIndexInvert } from "../../../index.D";
import type { ArrayLikeIndexHasInvertCore } from "./index.D";

const arrayLikeIndexHasInvertCore: ArrayLikeIndexHasInvertCore = <
	Index extends number,
	X     extends ArrayLike<unknown>
>(index: ToIndexInvert<Index>, x: X) => {
	const maybeDirectIndex = ~index;
	return x && index < 0 && x.length > maybeDirectIndex && ~maybeDirectIndex === index;
}

export default arrayLikeIndexHasInvertCore;
