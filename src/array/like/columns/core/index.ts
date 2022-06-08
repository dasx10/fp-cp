import type { ToIndexDirect } from "../../index/index.D";

const arrayColumnsCore = <ColumnCount extends number, X extends ArrayLike<unknown>> (columnCount: ToIndexDirect<ColumnCount>) => {
	const columns = Array.from({ length: columnCount }, () => []);
}

export default arrayColumnsCore;
