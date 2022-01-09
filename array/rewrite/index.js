function rewrite (executor) {
    return function useExecutor (array) {
        const rewrote = [];
        let index = 0;
        const { length } = array;
        while (index < length) {
            const result = executor(array[index], index, array);
            if (result !== void 0) rewrote.push(result);
            index++;
        }
        return rewrote;
    }
}

module.exports = rewrite;