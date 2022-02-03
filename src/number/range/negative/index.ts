/**
 * 
 * @param {any} value 
 * @returns {number}
 */
export type NegativeNumber<T extends number> = number extends T ? number : `${T}` extends `-${number}` ? T : -0;
function negative <Value extends number>(value: Value): NegativeNumber<Value> {
    return (value <= -0 ? value : -0) as NegativeNumber<Value>;
}

export default negative;