/**
 * @example 
 * const at3 = at(3);
 * at3([1, 2, 3, 4]); // 4
 * at3('test') // 't'
*/
function at <Index extends number>(index: Index) {
    const isLtZero = index < 0;
    return function useAt <Value extends any[] | string>(arrayOrString: Value): (Value extends (infer ArrayElement)[] ? Value[Index] : string) | void {
        return arrayOrString[isLtZero ? arrayOrString.length - index : index];
    }
}

export default at;