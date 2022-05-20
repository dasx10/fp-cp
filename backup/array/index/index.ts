import type { DropLast } from "../drop/index/last/index.D";
import indexOf from "./of/index";


const index = <X extends readonly any[]> (x: X): DropLast<X>['length'] => x.length - 1;

export default Object.assign(index, {
  of: indexOf
});
