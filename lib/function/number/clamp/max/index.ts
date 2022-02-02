import { ExcludeNumber } from "../../index.D";

/**
 * @param {number} maximum
 * `y > x` `?` `y : x`
 */
function max <X extends number, Y extends number>(x: X, y: ExcludeNumber<Y, X>): X | Y;
function max <X extends number>(x: X): <Y extends number>(y: ExcludeNumber<Y, X>) => X | Y;
function max <X extends number, Y extends number>(x: X, y?: Y) {
    if (arguments.length === 1) return function useMaximum <Y extends number>(y: Y) {
        return y > x ? y : x;
    }

    // @ts-ignore
    return y > x ? y : x;
}

export default max;