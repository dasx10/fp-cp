import Array from "../../..";

function countOfContext <T>(this: Array<T>, countValue: T): number {
    const { length } = this;
    if (length) {
        let index = 0;
        let count = 0;
        while (index < length) {
            if (this[index] === countValue) count++;
            index++;
        }
    }

    return 0;
}

export default countOfContext;