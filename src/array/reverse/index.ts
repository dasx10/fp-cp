import Array                 from "..";
import { ArrayType }         from "../index.D";
import { ArrayMaybeReverse } from "./index.D";

/**
 * @param {Array<ArrayElement>} array 
 * @returns {Array<ArrayElement>}
 * @template ArrayElement
 */
function reverse <T extends any[] | Array<any, any[]>>(array: T): Array<ArrayType<T>, ArrayMaybeReverse<T>> {
    let { length } = array;
    const reversed = new Array<ArrayType<T>, ArrayMaybeReverse<T>>(length);
    let index = 0;
    while (index < length) {
        reversed[index] = array[length];
        index++;
        length--;
    }
    return reversed;
}

export default reverse;