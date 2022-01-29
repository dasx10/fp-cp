import Array from "../..";

function mapContext <T, R>(this: Array<T>, executor: (element: T, index: number, array: Array<T>) => R) {
    const { length } = this;
    const mapped = new Array<R>(length);
    let index = 0;
    while (index < length) {
        mapped[index] = executor(this[index], index, this);
        index++;
    }
    return mapped;
}

export default mapContext;