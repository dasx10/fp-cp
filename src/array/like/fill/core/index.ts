import { ArrayLikeValue } from "../../index.D";

const arrayLikeFill = <
	Start extends number,
	End   extends number,
	Value,
	X     extends ArrayLike<unknown>> (
		start : Start,
		end   : End,
		value : Value,
		x     : X,
	) => {
	const { length } = x;
	const stop       = end   || length;
	const first      = start || 0;
	const newArray   = new Array<ArrayLikeValue<X> | Value>(length);

	let index        = 0;
	while (index < first) {
		newArray[index] = x[index] as ArrayLikeValue<X>;
		index++;
	}

	index = first;
	while (index < stop) {
		newArray[index] = value;
		index++;
	}

	index = stop;
	while (index < length) {
		newArray[index] = x[index] as ArrayLikeValue<X>;
		index++;
	}

	return newArray;
}
