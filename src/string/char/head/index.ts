import { Chars } from "../../chars/index.D";
const charHead = <X extends string>(x: X) => (x[0] || '') as Chars<X>[0] extends string ? Chars<X>[0] : ''; 
export default charHead;
