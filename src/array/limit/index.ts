// core
import _arrayLimitLeft  from "./left/_/index";
import _arrayLimitRight from "./right/_/index";
import _arrayLimit      from "./_/index";

// dependencies
import arrayLimitLeft   from "./left/index";
import limitRight  from "./right/index";

// interfaces 
import type { ArrayLimit } from "./_/index.D";

function arrayLimit <Finish extends number, X extends readonly any[]>(finish: Finish, array: X): ArrayLimit<Finish, X>;
function arrayLimit <Finish extends number>(finish: Finish): <X extends readonly any[]>(array: X) => ArrayLimit<Finish, X>
function arrayLimit <Finish extends number, X extends readonly any[]>(finish: Finish, array?: X) {
  const executor = finish < 0 ? _arrayLimitRight : _arrayLimitLeft;
	// @ts-ignore
	return arguments.length > 1 
		? executor(<never>finish, <X>array)
		: <X extends readonly any[]>(array: X) => executor(<never>finish, array);
}

export default Object.assign(arrayLimit, {
  core  : _arrayLimit,
  right : limitRight,
  left  : arrayLimitLeft,
});
