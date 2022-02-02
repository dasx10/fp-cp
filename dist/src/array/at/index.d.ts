/**
 * @example
 * const at3 = at(3);
 * at3([1, 2, 3, 4]); // 4
 * at3('test') // 't'
*/
declare function at<Index extends number>(index: Index): <Value extends string | any[]>(arrayOrString: Value) => void | (Value extends (infer ArrayElement)[] ? Value[Index] : string);
export default at;
