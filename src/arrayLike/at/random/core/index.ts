import type { ArrayLikeAtRandomCore } from "./index.D";

const arrayLikeAtRandomCore: ArrayLikeAtRandomCore = <X>(x: ArrayLike<X>) => {
	const { length } = x;
	switch (length) {
		case 0  : return;
		case 1  : return x[0];
		default : return x[~~(Math.random() * length)]
	}
}

export default arrayLikeAtRandomCore;
