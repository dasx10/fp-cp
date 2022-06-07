// core
import _arrayLimitLeft  from "./left/_/index";
import _arrayLimitRight from "./right/_/index";

// dependencies
import arrayLimitLeft   from "./left/index";
import arrayLimitRight  from "./right/index";
import { ArrayLimit } from "./core/index.D";
import _arrayLimit from "./core/index";

// interfaces 

function arrayLimitDef <Finish extends number, X extends readonly unknown[]>(finish: Finish, array: X): ArrayLimit<Finish, X>;
function arrayLimitDef <Finish extends number>(finish: Finish): <X extends readonly unknown[]>(array: X) => ArrayLimit<Finish, X>
function arrayLimitDef <Finish extends number, X extends readonly unknown[]>(finish: Finish, array?: X) {
  const executor = finish < 0 ? _arrayLimitRight : _arrayLimitLeft;
	// @ts-ignore
	return arguments.length > 1 
		? executor(<never>finish, <X>array)
		: <X extends readonly unknown[]>(array: X) => executor(<never>finish, array);
}

const arrayLimit = Object.assign(arrayLimitDef, {
  core  : _arrayLimit,
  right : arrayLimitRight,
  left  : arrayLimitLeft,
});

export default arrayLimit;
