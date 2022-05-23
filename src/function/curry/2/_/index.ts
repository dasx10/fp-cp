// core
import _ from "../../../../index";

// interfaces
import type { __ } from "../../../../index";

const _curry2 = (<Y, X, R> (def: <Y1, X1, R1>(y: Y, x: X) => R) => function(y:Y|X|__, x?:X|Y) {
	return arguments.length === 1 
      ? (x: X) => def(<Y>y, x)
      : _ === arguments[0]
        ? (y: Y) => def(y, <X>x)
        :           def(<Y>y, x as X);
}) as <Y, X, R>(def: <Y1, X1, R1>(y: Y, x: X) => R) => ({
	(y: Y, x: X):           R;
  (y: Y      ): (x: X) => R;
  (_:__, x: X): (y: Y) => R;
});

export default _curry2;
