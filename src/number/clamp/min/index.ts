import pipe from "../../../function/pipe";
import { ExcludeNumber } from "../../index.D";

/**
 * @param {number} minimum
 * `y < x` `?` `y : x;`
 * @example
 * min(3, 1); // 1;
 * min(10, 20); // 10;
 * 
 * const min3 = min(3); // [function (y: number) => x | y]
 * min3(8); // 8
 * min3(1); // 1
 */
function min <X extends number>(x: X): <Y extends number>(y: ExcludeNumber<Y, X>) => X | Y;
function min <X extends number, Y extends number>(x: X, y: ExcludeNumber<Y, X>): X | Y;
function min <X extends number, Y extends number>(x: X, y?: Y) {
    if (arguments.length === 1) return function useMinimum <Y extends number>(y: Y) {
        return y < x ? y : x;
    }

    // @ts-ignore
    return y < x ? y : x;
}

export default min;