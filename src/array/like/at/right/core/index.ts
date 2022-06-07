import arrayLikeAtDirectCore from "../../direct/core/index";
import arrayLikeAtInvertCore from "../../invert/core/index";
import type { ToIndexDirect, ToIndexInvert } from "../../../index/index.D";
import type { ArrayLikeAtRightCore } from "./index.D";

const arrayLikeAtRightCore = (<Index extends number, X extends ArrayLike<unknown>>(index: Index, x: X) => index < 0 
	? arrayLikeAtDirectCore (<ToIndexDirect<Index>> ~index, x)
	: arrayLikeAtInvertCore (<ToIndexInvert<Index>> ~index, x)) as ArrayLikeAtRightCore;

export default arrayLikeAtRightCore;
