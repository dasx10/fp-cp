import { ArrayMaybeReverse } from "../../reverse/index.D";
declare function atRight<Index extends number, InputArray extends any[]>(index: Index, array: InputArray): `${Index}` extends `-${infer Positive}` ? InputArray[Positive] : ArrayMaybeReverse<InputArray>[Index];
declare function atRight<Index extends number>(index: Index): <InputArray extends any[]>(array: InputArray) => ArrayMaybeReverse<InputArray>[Index];
export default atRight;
