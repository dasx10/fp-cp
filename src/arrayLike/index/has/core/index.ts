import type { ToIndexDirect } from "../../index.D";
import type { ArrayLikeIndexHasCore } from "./index.D";

const arrayLikeIndexHasCore: ArrayLikeIndexHasCore = <Index extends number, X extends ArrayLike<unknown>>(index: ToIndexDirect<Index>, { length } : X): boolean => 
	index > 0 && ~~index === index && length > index

export default arrayLikeIndexHasCore;
