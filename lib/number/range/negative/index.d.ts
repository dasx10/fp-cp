/**
 *
 * @param {any} value
 * @returns {number}
 */
export declare type NegativeNumber<T extends number> = number extends T ? number : `${T}` extends `-${number}` ? T : -0;
declare function negative<Value extends number>(value: Value): NegativeNumber<Value>;
export default negative;
