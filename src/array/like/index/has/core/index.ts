import arrayLikeIndexHasDirectCore from '../direct/core/index';
import arrayLikeIndexHasInvertCore from '../invert/core/index';

import type { ToIndex, ToIndexInvert, ToIndexDirect } from './../../index.D';
import type { ArrayLikeIndexHasCore }                 from "./index.D";

const arrayLikeIndexHasCore: ArrayLikeIndexHasCore = <
	Index extends number,
	X extends ArrayLike<unknown>
>(
	index: ToIndex<Index>,
	x : X
): boolean => index < 0 
		? arrayLikeIndexHasInvertCore(<ToIndexInvert<Index>>index, x)
		: arrayLikeIndexHasDirectCore(<ToIndexDirect<Index>>index, x);

export default arrayLikeIndexHasCore;
