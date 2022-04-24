import _curry2 from "../../function/curry/2/_/index";
import { placeholder } from "../../index";
import _or from "./_/index";

const or: {
	<Y>(y: Y): <X>(x: X) => X | Y;
	<X>(_: placeholder, x: X): <Y>(y: Y) => X | Y;
} = _curry2(_or);

export default or;
