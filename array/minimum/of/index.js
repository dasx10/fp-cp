function minimumOf (array) {
    const { length } = array;
    let index = 1;
    let minimum = array[0];
    while (index < length) {
        const element = array[index];
        if(element < minimum) minimum = element;
        index++;
    }

    return minimum;
}

module.exports = minimumOf;