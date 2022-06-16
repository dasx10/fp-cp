import type { ArrayLikeFilterOfCore } from "./index.D";

const arrayLikeFilterOfCore = (<Condition, X extends ArrayLike<unknown>>(condition: Condition, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return condition === x[0] ? [condition] : [];
		default : {
			const filtered = condition === x[0] ? [condition] : [];
			let index = 1;
			while (index < length) {
				if (condition === x[index]) filtered.push(condition);
				index++;
			}
			return filtered;
		};
	};
}) as ArrayLikeFilterOfCore;

export default arrayLikeFilterOfCore;
