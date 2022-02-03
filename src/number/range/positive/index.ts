/**
 * @param {any} value 
 * @returns {number}
 */

export type PositiveNumber<T extends number> = number extends T ? number : `${T}` extends `-${number}` ? 0 : T;
function positive <Value extends number>(value: Value): PositiveNumber<Value> {
    return (value >= 0 ? value : 0) as PositiveNumber<Value>;
}

const a = positive(3)

export default positive;