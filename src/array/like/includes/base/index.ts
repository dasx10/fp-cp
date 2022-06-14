import type { ArrayLikeValue } from "../../index.D";

const arrayLikeIncludesBase = <Value extends ArrayLikeValue<X>, X extends ArrayLike<unknown>>(value: Value, x: X) => {
	const { length } = x;
	
}

export default arrayLikeIncludesBase;
