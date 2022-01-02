/**
 * @param {Param} arrayOrString 
 * @returns {Param extends (infer T)[] ? T : string}
 * @template Param extends any[]|string
 */
function head (arrayOrString) {
    return arrayOrString[0];
}

module.exports = head;