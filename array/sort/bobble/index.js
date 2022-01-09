function sortBubble (array) {
    const n = array.length - 1;
    let index;
    let stop;
    let nextIndex;
    let i;
    let cache;
    for (i = 0; i < n; i++) {
        index = 0;
        stop = n - i;
        while (index < stop) {
            nextIndex = index + 1;
            if (array[nextIndex] < array[index]) {
                cache = array[index];
                array[index] = array[nextIndex];
                array[nextIndex] = cache;
            }
            index = nextIndex;
        }
    }
    return array;
}

module.exports = sortBubble;