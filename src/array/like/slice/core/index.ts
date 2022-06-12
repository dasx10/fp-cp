import type { ArrayLikeSliceCore } from './index.D';
import type { ToIndex }            from './../../index/index.D';

const minZero       = (index: number) => index < 0 ? 0 : index;
const normilzeIndex = (index: number, length: number) => index < 0 ? minZero(length + ~index) : index < length ? index : length;

const arrayLikeSliceCore = (<From extends number, To extends number, X extends ArrayLike<unknown>>(from: ToIndex<From>, to: ToIndex<To>, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		// @ts-ignore
		case 1  : return ((from <= 0 || to <= 0) && from !== to && from !== ~to) ? [x[0]] : [];
		default : {
			let start = normilzeIndex(from, length);
			let end   = normilzeIndex(to, length);
			if (start === end) return [];
			[start, end] = start < end ? [start, end] : [end, start];
			const finish   = end - start;
			const filtered = new Array(finish);
			filtered[0] = x[start]
            let index = 1;
			while(index < finish) {
				filtered[index] = x[start + index];
                index++;
			}
			return filtered;
		}
	}
}) as ArrayLikeSliceCore;

export default arrayLikeSliceCore;
