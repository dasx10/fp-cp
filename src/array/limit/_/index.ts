import _limitLeft          from "../left/_/index";
import _limitRight         from "../right/_/index";
import type { ArrayLimit } from "./index.D";

function _limit <Finish extends number, X extends any[]>(finish: Finish, array: X): ArrayLimit<Finish, X> {
  return (finish 
    ? finish > 0 
      ? _limitRight(finish, array) 
      : _limitLeft(finish, array) 
    : []) as ArrayLimit<Finish, X>;
}

export default _limit;
