// core
import _limitLeft  from "./left/_/index";
import _limitRight from "./right/_/index";
import _limit      from "./_/index";

// dependencies
import limitLeft   from "./left/index";
import limitRight  from "./right/index";

// interfaces 
import type { ArrayLimit } from "./_/index.D";

function limit <Finish extends number, X extends any[]>(finish: Finish, array: X): ArrayLimit<Finish, X>;
function limit <Finish extends number>(finish: Finish): <X extends any[]>(array: X) => ArrayLimit<Finish, X>
function limit <Finish extends number, X extends any[]>(finish: Finish, array?: X) {
  const executor = finish < 0 ? _limitRight : _limitLeft;
  if (arguments.length > 1) return executor(finish, <X>array);
  return <X extends any[]>(array: X) => executor(finish, array);
}

export default Object.assign(limit, {
  core  : _limit,
  right : limitRight,
  left  : limitLeft,
});
