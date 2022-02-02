function maximumOf (array: number[]) {
    const { length } = array;
    let maximum = array[0];
    let index = 1;
    while (index < length) {
        const element = array[index];
        if (element > maximum) maximum = element;
        index++;
    }
    return maximum;
}

export default maximumOf;