// core
import arrayLikeAtCore       from "../../core/index";
import arrayLikeAtDirectCore from "../../direct/core/index";
import arrayLikeAtInvertCore from "../../invert/core/index";

// interfaces
import { __ }                  from "../../../../../index";
import { ToIndex }             from "../../../index/index.D";
import { ArrayLikeAtRightDef } from "./index.D";

const arrayLikeAtRightDef = (function <Index extends number, X extends ArrayLike<unknown>>(index: ToIndex<Index> | __, x?: X) {
	switch (arguments.length) {
		case 1: {
			const invertIndex = ~index;
			const executor    = invertIndex < 0 ? arrayLikeAtInvertCore : arrayLikeAtDirectCore;
			// @ts-ignore
			return <X extends ArrayLike<unknown>>(x: X) => executor(invertIndex, x);
		}
		case 2: {
			// @ts-ignore
			if (index[Symbol.for('placeholder')]) return <Index extends number>(index: ToIndex<Index>) => arrayLikeAtCore(~index, <X>x);
			return arrayLikeAtCore(<ToIndex<Index>>~index, <X>x);
		}
	}
}) as ArrayLikeAtRightDef

export default arrayLikeAtRightDef;
