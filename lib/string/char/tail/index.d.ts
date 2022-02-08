import type { ArrayMaybeReverse } from "../../../array/reverse/index.D";
import type { Chars } from "../../chars/index.D";
declare const charTail: <X extends string>(x: X) => ArrayMaybeReverse<Chars<X>>[0] extends string ? ArrayMaybeReverse<Chars<X>>[0] : "";
export default charTail;
