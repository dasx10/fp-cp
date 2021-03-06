import _arrayLimitLeft          from "../left/_/index";
import _arrayLimitRight      from "../right/_/index";
import type { ArrayLimit }   from "./index.D";
import type { OnlyNegative } from "../../../../number/index.D";

function _arrayLimit <Finish extends number, X extends readonly unknown[]>(finish: Finish, array: X): ArrayLimit<Finish, X> {
  return (finish 
    ? finish > 0 
			? _arrayLimitLeft(finish, array)
      : _arrayLimitRight(<OnlyNegative<Finish>>finish, array) 
    : []) as ArrayLimit<Finish, X>;
}

export default _arrayLimit;
