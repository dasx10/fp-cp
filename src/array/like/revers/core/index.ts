import type { ArrayLikeReversCore } from "./index.D";

const arrayLikeReversCore = (<X extends ArrayLike<unknown>>(x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return [x[0]];
		case 2  : return [x[1], x[0]];
		default : {
			const filtered = new Array(length);
			const lastIndex = length - 1;
			filtered[0] = x[lastIndex];
			let index = 1;
			while (index < length) {
				filtered[index] = x[lastIndex - index];
				index++;
			}

			return filtered;
		};
	};
}) as ArrayLikeReversCore;

export default arrayLikeReversCore;
