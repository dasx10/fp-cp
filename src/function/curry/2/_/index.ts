// interfaces
import type { __ } from "../../../../index";

const symbolPlaceholder = Symbol.for('placeholder');

const Void = void 0;
const _curry2 = (<Y, X, R>(def: (y: Y, x: X) => R) => function (y: Y| __ , x? :X) {
	switch (arguments.length) {
		case 1: return (x: X) => def(<Y>y, x);
		case 2: {
			// @ts-ignore
			if (y !== Void && y !== null && y[symbolPlaceholder]) return (y: Y) => def(y, <X>x);
			return def(<Y>y, x as X);
		}
	}
}) as <Y, X, R>(def: <Y1, X1, R1>(y: Y, x: X) => R) => ({
	(y: Y, x: X):           R;
  (y: Y      ): (x: X) => R;
  (_:__, x: X): (y: Y) => R;
});

export default _curry2;
