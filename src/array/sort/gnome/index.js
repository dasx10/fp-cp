// @ts-nocheck
function sortGnome (array) {
    const { length } = array;
    let index = 1,
    j = 2,
    cache;
    while (index < length) {
        let prevIndex = index - 1;
        if (array[prevIndex] < array[index]){
            index = j;
            j++;
        } else { 
            var cache = array[prevIndex];
            array[prevIndex] = array[index];
            array[index] = cache;
            index--;
            if (index === 0){ 
                index = j;
                j++;
            }
        }
    }
    return array;
}

module.exports = sortGnome;