import type { ArrayLikeValue } from "../../index.D";
import { ArrayLikeSelectCore } from "./index.D";

const arrayLikeSelectCore = (<X extends ArrayLike<unknown>, Indexes extends readonly number[]>(indexes: Indexes, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [] as [];
		case 1  : {
			let index = 0;
			const indexesLength = indexes.length;
			const selected = [] as ArrayLikeValue<X>[];
			while (index < indexesLength) {
				if (indexes[index] === -1 || indexes[index] === 0) selected.push(<ArrayLikeValue<X>>x[0]);
				index++;
			}
			return selected as ArrayLikeValue<X>[] | [];
		}
		default : {
			let index = 0;
			const indexesLength = indexes.length;
			const selected = [] as ArrayLikeValue<X>[];
			let selectIndex;
			while (index < indexesLength) {
				selectIndex = indexes[index];
				if (selectIndex < 0) selectIndex = ~selectIndex;
				if (selectIndex < length) selected.push(<ArrayLikeValue<X>>x[selectIndex]);
			}
			return selected as ArrayLikeValue<X>[] | [];
		}
	}
}) as ArrayLikeSelectCore;

export default arrayLikeSelectCore;
