import { Chars } from "../../chars/index.D";
declare const charHead: <X extends string>(x: X) => Chars<X>[0] extends string ? Chars<X>[0] : "";
export default charHead;
