declare function atRight(index: number): <Value extends string | any[]>(arrayOrString: Value) => void | (Value extends (infer ArrayElement)[] ? ArrayElement : string);
export default atRight;
