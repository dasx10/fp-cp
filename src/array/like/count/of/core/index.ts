import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeCountOfCore } from "./index.D";

const arrayLikeCountOfCore = (<FindValue extends ArrayLikeValue<X>, X extends ArrayLike<unknown>>(findValue: FindValue, x: X): number => {
	const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return findValue === x[0] ? 1 : 0;
		default : {
			let count = findValue === x[0] ? 1 : 0;
			let index = 1;
			while (index < length) {
				if (findValue === x[index]) count++;
				index++;
			}
		
			return count;
		}
	}
}) as ArrayLikeCountOfCore;

export default arrayLikeCountOfCore;
