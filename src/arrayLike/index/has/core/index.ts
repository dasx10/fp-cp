import type { ToIndexLeft } from "../../index.D";
import type { ArrayLikeIndexHasCore } from "./index.D";

const arrayLikeIndexHasCore: ArrayLikeIndexHasCore = <Index extends number>(index: ToIndexLeft<Index>, x: ArrayLike<any>): boolean => 
	index > 0 
&&	~~index === index
&& x.length > index

export default arrayLikeIndexHasCore;
