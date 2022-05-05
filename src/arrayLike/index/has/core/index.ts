import type { ToIndexDirect } from "../../index.D";
import type { ArrayLikeIndexHasCore } from "./index.D";

const arrayLikeIndexHasCore: ArrayLikeIndexHasCore = <Index extends number>(index: ToIndexDirect<Index>, x: ArrayLike<any>): boolean => 
	index > 0 
&&	~~index === index
&& x.length > index

export default arrayLikeIndexHasCore;
