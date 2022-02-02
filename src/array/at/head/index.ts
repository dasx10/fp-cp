import type { ArrayFirstElement } from '../../index.D';

function head <
  Value extends any[] | string,
>(arrayOrString: Value): (Value extends any[]
  ? ArrayFirstElement<Value> : string) | void {
  return arrayOrString[0];
}

export default head;
