function limit (limitIndex: number) {
    const isLtZero = limitIndex < 0;
    return function useLimit <InputArray extends any[]>(array: InputArray): InputArray {
        const { length } = array;
        const finish = isLtZero ? limitIndex + length : limitIndex;
        const limited = <InputArray>new Array(finish);
        let index = 0;
        while (index < finish) {
            limited[index] = array[index];
            index++;
        }
        
        return limited;
    }
}

export default limit;