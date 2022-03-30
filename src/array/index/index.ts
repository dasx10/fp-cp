import indexOf from "./of/index";

import type { DropLast } from "../drop/last/index.D";

const index = <X extends readonly any[]> (x: X): DropLast<X>['length'] => x.length - 1;

export default Object.assign(index, {
  of: indexOf
});
