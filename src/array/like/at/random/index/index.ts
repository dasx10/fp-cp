import type { ArrayLikeAtRandomIndexCore } from "./index.D";

const arrayLikeAtRandomIndexCore: ArrayLikeAtRandomIndexCore = <X extends ArrayLike<unknown>> (x: X): number | void => {
	const { length } = x;
	switch (length) {
		case 0  : return;
		case 1  : return 0;
		default : return ~~(Math.random() * length);
	}
}

export default arrayLikeAtRandomIndexCore;
