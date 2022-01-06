/**
 * @param {Param & (ArrayElement[] | string)} arrayOrString 
 * @returns {Param extends ArrayElement[] ? Param extends [infer First, ...inferNext] ? First : ArrayElement : string}
 * @template Param
 * @template ArrayElement
 */
function head (arrayOrString) {
    return arrayOrString[0];
}

module.exports = head;