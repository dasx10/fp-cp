import type { ArrayLikeAtRandomCore } from "./index.D";

const arrayLikeAtRandomCore = (<X extends ArrayLike<unknown>>(x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return;
		case 1  : return x[0];
		default : return x[~~(Math.random() * length)]
	}
}) as ArrayLikeAtRandomCore;

export default arrayLikeAtRandomCore;
