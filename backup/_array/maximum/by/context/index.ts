import { IterateDef } from "../../../index.D";

function maximumByContext <T>(this: T[], executor: IterateDef<T, number>) {
    const { length } = this;
    if (length) {
        let index = 1;
        let maximum = executor(this[0], index, this);
        while (index < length) {
            const element = this[index];
            const value = executor(element, index, this);
            if (value > maximum) maximum = value;
            index++;
        }

        return maximum;
    }
}

export default maximumByContext;
