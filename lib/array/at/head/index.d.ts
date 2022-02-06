import type { ArrayFirstElement } from '../../index.D';
declare function head<Value extends any[] | string>(arrayOrString: Value): (Value extends any[] ? ArrayFirstElement<Value> : string) | void;
export default head;
