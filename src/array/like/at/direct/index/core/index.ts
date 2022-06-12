import type { ArrayLikeIndex }             from "../../../../index.D";
import type { ToIndexDirect }              from "../../../../index/index.D";
import type { ArrayLikeAtDirectIndexCore } from "./index.D";

const arrayLikeAtDirectIndexCore = (<Index extends ArrayLikeIndex<X>, X extends ArrayLike<unknown>>(index: ToIndexDirect<Index>, { length }: X): Index | void => {
	if (index < length && index > -1 && index === ~~index) return index;
}) as ArrayLikeAtDirectIndexCore;

export default arrayLikeAtDirectIndexCore;
