import type { ArrayValue } from "../../array/index.D";

const arrayLikeCore = <Values extends readonly any[]>(...args: Values): ArrayLike<ArrayValue<Values>> => {
	const arrayLike = Object.create(null)
	const { length } = args;

	Object.defineProperty(arrayLike, 'length', {
		enumerable   : false,
		get () {
			let length = 0;
			for (const _ in this) length++;
			return length;
		}
	});
	
	if (length > 0) {
		let index = 0;
		while (index < length) {
			arrayLike[index] = args[index];
			index++;
		}
	}

	return arrayLike;
}

export default arrayLikeCore;
