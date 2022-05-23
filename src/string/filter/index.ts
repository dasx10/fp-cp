import _curry2 from "../../function/curry/2/_/index";
import _filter from "./_/index";

import type { __ } from "../../index";
import type { StrIterate }  from "../index.D";

const filter: {
  <X extends string>(def: StrIterate<X>, x: X): string;
  (def: StrIterate): <X extends string>(x: X) => string;
  <X extends string>(_: __, x: X): (def: StrIterate<X>) => string;
} = _curry2(_filter);

export default filter;
