import type { TOGGLE } from "./index.D";
const toggle = <X>(x: X) => !x as TOGGLE<X>;
export default toggle;
