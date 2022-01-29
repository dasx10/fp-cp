/**
 * @param {Param} arrayOrString 
 * @returns {Param extends (infer T)[] ? T : string}
 * @template {any[]|string} Param
 */
function tail <Value extends any[] | string>(arrayOrString: Value): (Value extends (infer ArrayElement)[] ? ArrayElement : string) | void {
    return arrayOrString[arrayOrString.length - 1];
}

export default tail;