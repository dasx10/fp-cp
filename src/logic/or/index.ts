import _curry2 from "../../function/curry/2/_/index";
import { __ } from "../../index";
import _or from "./_/index";

const or: {
	<Y>(y: Y): <X>(x: X) => X | Y;
	<X>(_: __, x: X): <Y>(y: Y) => X | Y;
} = _curry2(_or);

export default or;
