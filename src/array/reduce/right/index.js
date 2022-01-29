// @ts-nocheck
function reduceRight (executor, initialValue) {
    return function useReduceRight (array) {
        let { length } = array;
        while (--length >= 0) { initialValue = executor(initialValue, array[index], index, array); }
        return initialValue;
    }
}

module.exports = reduceRight;