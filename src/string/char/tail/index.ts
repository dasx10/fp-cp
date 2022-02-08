import type { ArrayMaybeReverse } from "../../../array/reverse/index.D";
import type { Chars } from "../../chars/index.D";

const charTail = <X extends string>(x: X) => (x[x.length - 1] || '') as ArrayMaybeReverse<Chars<X>>[0] extends string 
? ArrayMaybeReverse<Chars<X>>[0] : '';

export default charTail;
