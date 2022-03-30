import { TOGGLE } from "./index.D";

function toggle <X>(x: X): TOGGLE<X> {
  return !x as TOGGLE<X>;
}

export default toggle;
