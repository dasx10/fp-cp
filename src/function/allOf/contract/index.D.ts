import type { __ } from "../../../index";
import type { AllOf, AllOfCore, DefPredicate, ReturnPredicate } from "../core/index.D";

export type AllOfDef <Type extends DefPredicate = DefPredicate> = AllOfCore <Type> & {
	// @ts-ignore
	<Defs extends readonly [Type, DefPredicate<ReturnPredicate<Defs[0]>>, ...DefPredicate<ReturnPredicate<Defs[1]>>[]]>(defs: Defs): <Value>(value: Value) => value is AllOf<Defs> & Value;
	// @ts-ignore
	<Value>(_:__, value: Value): <Defs extends readonly [Type, Type, ...Type[]]>(defs: Defs) => value is AllOf<Defs> & Value;
}
