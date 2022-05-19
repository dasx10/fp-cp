import type { ArrayLikeIndex }             from "../../../../index.D";
import type { ToIndexDirect }              from "../../../../index/index.D";
import type { ArrayLikeAtDirectIndexCore } from "./index.D";

const arrayLikeAtDirectIndexCore: ArrayLikeAtDirectIndexCore = <Index extends ArrayLikeIndex<X>, X extends ArrayLike<any>>(index: ToIndexDirect<Index>, { length }: X): Index | void => {
	if (index < length && index > 0) return index;
}

export default arrayLikeAtDirectIndexCore;
