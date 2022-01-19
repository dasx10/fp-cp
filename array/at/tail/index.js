/**
 * @param {Param} arrayOrString 
 * @returns {Param extends (infer T)[] ? T : string}
 * @template {any[]|string} Param
 */
function tail (arrayOrString) {
    return arrayOrString[arrayOrString.length - 1];
}

module.exports = tail;