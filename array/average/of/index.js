function averageOf (array) {
    const { length } = array;
    let index = 0;
    let sum = 0;
    while (index < length) {
        sum += array[index];
        index++;
    }
    return sum / length;
}

module.exports = averageOf;