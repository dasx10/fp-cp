import { TOGGLE } from "./index.D";

// @ts-ignore
function toggle <X>(x: X): TOGGLE<X>;
// @ts-ignore
const toggle = <X extends boolean>(x: X) => !x;
export default toggle;
