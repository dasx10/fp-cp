import { ArrayMaybeReverse } from "../../../../dist/array/reverse/index.D";

type Inverse <Index extends number> = `${Index}` extends `-${infer Positive}`
  ? Positive
  : `${Index}` extends `${number}`
    ? `-${Index}`
    : number;

function atRight<Index extends number, InputArray extends any[]>(index: Index, array: InputArray): `${Index}` extends `-${infer Positive}`
  // @ts-ignore
  ? InputArray[Positive]
  : ArrayMaybeReverse<InputArray>[Index];
function atRight<Index extends number>(index: Index): <InputArray extends any[]>(array: InputArray) => ArrayMaybeReverse<InputArray>[Index];
function atRight(index: number, array?: any[]) {
  const isLtZero = index < 0;
  if (arguments.length === 1) return function useAtRight <Value extends any[] | string>(
    array: Value,
  ): (Value extends (infer ArrayElement)[] ? ArrayElement : string) | void {
    return array[isLtZero ? +index : array.length + index];
  };

  return (array as any[])[index]
}

export default atRight;
