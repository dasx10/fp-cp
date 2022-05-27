import type { ArrayLikeIndex } from "../../../../index.D";
import type { ToIndexDirect }  from "../../../index.D";
import type { ArrayLikeIndexHasDirectCore } from "./index.D";

const arrayLikeIndexHasDirectCore = (<
	Index extends ArrayLikeIndex<X>,
	X     extends ArrayLike<unknown>
>(
	index : ToIndexDirect<Index>,
	x     : X
): boolean => x && index > -1 && index < x.length && index === ~~index) as ArrayLikeIndexHasDirectCore;

export default arrayLikeIndexHasDirectCore;


const a = [1, 2, 3];

// const aa = arrayLikeIndexHasDirectCore(1, a);
if (arrayLikeIndexHasDirectCore(1, a)) {
	const b = a[1]
}
