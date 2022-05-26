// core
import _                             from '../../../../index';
import arrayLikeIndexHasCore         from '../core/index';
import arrayLikeIndexHasInvertCore   from '../invert/core/index';
import arrayLikeIndexHasDirectCore   from '../direct/core/index';

// interfaces
import type { ArrayLikeIndexHasDef } from './../index.D';
import type { ToIndex }              from './../../index.D';
import type { __ }                   from '../../../../index';

const arrayLikeIndexHasDef = function <Index extends number, X extends ArrayLike<unknown>>(index:ToIndex<Index>|__, x?: X | ToIndex<Index>) {
	switch (arguments.length) {
		case 1: {
			const executor = index < 0 ? arrayLikeIndexHasInvertCore : arrayLikeIndexHasDirectCore;
			// @ts-ignore
			return <X extends ArrayLike<unknown>>(x: X) => executor(index, x)
		}
		default: {
			if (arguments[0] === _) return <Index extends number>(index: ToIndex<Index>) => arrayLikeIndexHasCore(index, <ArrayLike<unknown>>x);
			return arrayLikeIndexHasCore(<never>index, <ArrayLike<unknown>>x);
		}
	}
} as ArrayLikeIndexHasDef;

export default arrayLikeIndexHasDef;
