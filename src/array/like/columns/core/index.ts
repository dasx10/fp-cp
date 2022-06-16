import type { ArrayLikeValue } from './../../index.D';
import type { ToIndexDirect } from "../../index/index.D";

const arrayColumnsCore = <ColumnCount extends number, X extends ArrayLike<unknown>> (columnCount: ToIndexDirect<ColumnCount>, x: X) => {
	const columns = Array.from({ length: columnCount }, () => []) as ArrayLikeValue<X>[][];
	const { length } = x;
	if (length > 0) {
		let index = 0;
		while (index < length) {
			columns[index % columnCount].push(<ArrayLikeValue<X>>x[index]);
			index++;
		}
	}
	return columns;
}

export default arrayColumnsCore;
