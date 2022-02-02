import type { CharOf } from '../../../string/char/at/index.D';

function tail <InputString extends string>(string: InputString): CharOf<InputString>;
// function tail <InputArray extends any[]> (string: InputArray): InputArray
function tail <
  Value extends any[] | string,
>(
  arrayOrString: Value,
): (Value extends (infer ArrayElement)[] ? ArrayElement : string) | void {
  return arrayOrString[arrayOrString.length - 1];
}

export default tail;
