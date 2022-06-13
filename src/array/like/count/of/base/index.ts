import type { ArrayLikeValue } from "../../../index.D";

const arrayLikeCountOfBase = <FindValue extends ArrayLikeValue<X>, X extends ArrayLike<unknown>>(findValue: FindValue, x: X): number => {
	const { length } = x;
  let count = findValue === x[0] ? 1 : 0;
	let index = 1;
	while (index < length) {
		if (findValue === x[index]) count++;
		index++;
	}

	return count;
}

export default arrayLikeCountOfBase;
