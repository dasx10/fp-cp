import Array from "../../..";

function fillEndContext <T>(this: Array<T>, value: T, end: number) {
    const { length } = this;
    const newArray = new Array(length);
    const stop = end || length;
    let index = 0;
    while (index < stop) {
        newArray[index] = value;
        index++;
    }

    index = stop;
    while (index < length) {
        newArray[index] = this[index];
        index++;
    }

    return newArray;
}

export default fillEndContext;