import type { ArrayLikeIndex } from "../../../../index.D";
import type { ToIndexDirect }  from "../../../index.D";
import type { ArrayLikeIndexHasDirectCore } from "./index.D";

const arrayLikeIndexHasDirectCore: ArrayLikeIndexHasDirectCore = <
	Index extends ArrayLikeIndex<X>,
	X     extends ArrayLike<unknown>
>(
	index : ToIndexDirect<Index>,
	x     : X
): boolean => x && index > -1 && index < x.length && index === ~~index;

export default arrayLikeIndexHasDirectCore;
