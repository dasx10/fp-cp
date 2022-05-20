import _rangeDecrement from "../decrement/_/index";
import _rangeIncrement from "../increment/_/index";

const _range = (start: number, end: number) => end > start
? _rangeIncrement(start, end) 
: _rangeDecrement(start, end);

export default _range;
