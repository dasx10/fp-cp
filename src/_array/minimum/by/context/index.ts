import { IterateDef } from "../../../index.D";

function minimumByContext <T>(this: T[], executor: IterateDef<T, number>) {
    const { length } = this;
    let minimum = executor(this[0], 0, this);
    let index = 1;
    while (index < length) {
        const value = executor(this[index], index, this);
        if (value < minimum) minimum = value;
        index++;
    }
    return minimum;
}

export default minimumByContext;
