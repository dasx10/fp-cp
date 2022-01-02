/**
 * @param {Param} arrayOrString 
 * @returns {Param extends (infer T)[] ? T : string}
 * @template Param extends any[]|string
 */
function tail (arrayOrString) {
    return arrayOrString[arrayOrString.length - 1];
}

module.exports = tail;