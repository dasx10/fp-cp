/**
 * @param {any} value
 * @returns {number}
 */
export declare type PositiveNumber<T extends number> = number extends T ? number : `${T}` extends `-${number}` ? 0 : T;
declare function positive<Value extends number>(value: Value): PositiveNumber<Value>;
export default positive;
