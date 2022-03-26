import _map from "./_/index";
import _curry2 from "../../function/curry/2/_/index";

import type { placeholder } from "../../index";
import type { StrIterate } from "../index.D";

const map: {
  <X extends string, R extends string>(def: StrIterate<X, R>, x: X): string; 
  <X extends string, R extends string>(def: StrIterate<X, R>): (x: X) => string;
  <X extends string>(_: placeholder, x: X): <R extends string>(def: StrIterate<X, R>) => string;
} = _curry2(_map);

export default map;
