/**
 * @param {Param} arrayOrString
 * @returns {Param extends (infer T)[] ? T : string}
 * @template {any[]|string} Param
 */
declare function tail<Value extends any[] | string>(arrayOrString: Value): (Value extends (infer ArrayElement)[] ? ArrayElement : string) | void;
export default tail;
