import Array from "../../..";

function countByContext <T>(this: Array<T>, executor: (element: T, index: number, array: Array<T>) => number) {
    let count = 0;
    let index = 0;
    const { length } = this;
    while (index < length) {
        if (executor(this[index], index, this)) count++;
        index++;
    }
    return count;
}

export default countByContext;

