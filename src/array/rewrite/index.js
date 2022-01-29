// @ts-nocheck
function rewrite (executor) {
    return function useExecutor (array) {
        const { length } = array;
        const rewrote = new Array();
        let index = 0;
        while (index < length) {
            const result = executor(array[index], index, array);
            if (result !== void 0) rewrote.push(result);
            index++;
        }
        return rewrote;
    }
}

module.exports = rewrite;