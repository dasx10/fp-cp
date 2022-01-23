function limit (limitIndex) {
    const isLtZero = limitIndex < 0;
    return function useLimit (array) {
        const { length } = array;
        const finish = isLtZero ? limitIndex + length : limitIndex;
        const limited = new Array(finish);
        let index = 0;
        while (index < finish) {
            limited[index] = array[index];
            index++;
        }
        
        return limited;
    }
}

module.exports = limit;