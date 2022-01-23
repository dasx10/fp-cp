function limitMutation (limitIndex) {
    const isLtZero = limitIndex < 0;
    return function useLimit (array) {
        const { length } = array;
        let currentLimit = isLtZero ? length + limitIndex : limitIndex;
        array.length = currentLimit;
        while (currentLimit < length) {
            delete array[currentLimit];
            currentLimit++;
        }
        return array;
    }
}

module.exports = limitMutation;