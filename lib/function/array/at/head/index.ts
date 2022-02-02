import { ArrayFirstElement } from "../../index.D";

/**
 * @param {Param & (ArrayElement[] | string)} arrayOrString 
 * @returns {Param extends ArrayElement[] ? Param extends [infer First, ...inferNext] ? First : ArrayElement : string}
 * @template Param
 * @template ArrayElement
 */
function head <Value extends any[] | string>(arrayOrString: Value): (Value extends any[] ? ArrayFirstElement<Value> : string) | void {
    return arrayOrString[0];
}

export default head;