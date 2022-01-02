/**
 * @param {number} index
 * @return {<Param extends any[] | string>(arrayOrString: Param) => (Param extends (infer T)[] ? T : string) | void}
 */
function at (index) {
    /**
     * @param {string | ArrayElement[]} arrayOrString
     * @return {typeof arrayOrString extends any[] ? ArrayElement : string}
     * @template ArrayElement
     */
    return function useAt (arrayOrString) {
        return arrayOrString[index >= 0 ? index : array.length - index];
    }
}

module.exports = at;