import type { ArrayLikeReduceRightCore } from './../core/index.D';
import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';
import type { __ } from '../../../../../index';


export type ArrayLikeReduceRightDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeReduceRightCore<Type> & {
	<
		CURRENT_VALUE,
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (
		currentValue : CURRENT_VALUE,
		value        : Value & ArrayLikeValue<WaitArrayLikeType>,
		index        : ArrayLikeIndex<WaitArrayLikeType>,
		x            : WaitArrayLikeType & ArrayLike<Value>
	) => CURRENT_VALUE): {
		<INITIAL_VALUE extends CURRENT_VALUE>(initialValue: INITIAL_VALUE) : <X extends WaitArrayLikeType>(x: X) => INITIAL_VALUE;
		<INITIAL_VALUE extends CURRENT_VALUE, X extends WaitArrayLikeType>(initialValue: INITIAL_VALUE, x: X) : INITIAL_VALUE;
		<X extends WaitArrayLikeType>(_:__, x: X): <INITIAL_VALUE extends CURRENT_VALUE>(initialValue: INITIAL_VALUE) => INITIAL_VALUE;
	}

	<
		INITIAL_VALUE,
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (
			currentValue : INITIAL_VALUE,
			value        : Value & ArrayLikeValue<WaitArrayLikeType>,
			index        : ArrayLikeIndex<WaitArrayLikeType>,
			x            : WaitArrayLikeType & ArrayLike<Value>
		) => INITIAL_VALUE, initialValue: INITIAL_VALUE
	): <X extends WaitArrayLikeType>(x: X) => INITIAL_VALUE;

	<INITIAL_VALUE>(_:__, initialValue: INITIAL_VALUE): {
		<
			Value             extends ArrayLikeValue<Type>,
			WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
		>(def: (
			currentValue : INITIAL_VALUE,
			value        : Value & ArrayLikeValue<WaitArrayLikeType>,
			index        : ArrayLikeIndex<WaitArrayLikeType>,
			x            : WaitArrayLikeType & ArrayLike<Value>
		) => INITIAL_VALUE): <X extends WaitArrayLikeType>(x: X) => INITIAL_VALUE;

	<X extends Type>(
		def: (
			currentValue : INITIAL_VALUE,
			value        : ArrayLikeValue<X>,
			index        : ArrayLikeIndex<X>,
			x            : X
		) => INITIAL_VALUE,
		x: X
	): INITIAL_VALUE;

	<X extends Type>(
		_:__,
		x: X
	): (def: (
		currentValue : INITIAL_VALUE,
		value        : ArrayLikeValue<X>,
		index        : ArrayLikeIndex<X>,
		x            : X
	) => INITIAL_VALUE) => INITIAL_VALUE;

	}
}
