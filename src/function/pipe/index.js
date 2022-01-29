// @ts-nocheck
/**
 * @param {FirstFunction} firstFunction 
 * @param  {[[...(NextFunctions & [((arg: ReturnType<FirstFunction>) => any)])], LastFunction] | [LastFunction & ((arg: ReturnType<FirstFunction>) => any)]} functions
 * @returns {(...args: Parameters<FirstFunction>) => ReturnType<LastFunction>}
 * @template {(...args: any) => any} FirstFunction
 * @template NextFunctions
 * @template LastFunction
 */
function pipe(firstFunction, ...functions) {
    return function piped(...args) {
        let result = firstFunction(...args);
        let index = 0;
        while (index < functions.length) {
            result = functions[index](result);
            index++;
        }
        return result;
    };
}

module.exports = pipe;
