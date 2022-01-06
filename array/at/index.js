/**
 * @param {number} index
 * @return {<Param extends any[] | string>(arrayOrString: Param) => (Param extends (infer T)[] ? T : string) | void}
 * @example 
 * const at3 = at(3);
 * at3([1, 2, 3, 4]); // 4
 * at3('test') // 't'
*/
function at (index) {
    const isGteZero = index >= 0;
    /**
     * @param {string | ArrayElement[]} arrayOrString
     * @return {typeof arrayOrString extends any[] ? ArrayElement : string}
     * @template ArrayElement
     */
    return function useAt (arrayOrString) {
        return arrayOrString[isGteZero ? index : arrayOrString.length - index];
    }
}

module.exports = at;