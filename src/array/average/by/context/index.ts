function averageByContext <T>(this: T[], executor: (element: T, index: number, array: T[]) => number) {
    const { length } = this;
    let index = 0;
    let result = 0;
    while (index < length) {
        result += executor(this[index], index, this);
        index++;
    }
    return result / length;
}

export default averageByContext;