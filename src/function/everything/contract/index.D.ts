import type { __ } from "../../../index";
import type { Everything, EverythingCore, DefPredicate, ReturnPredicate } from "../core/index.D";

export type EverythingDef <Type extends DefPredicate = DefPredicate> = EverythingCore <Type> & {
	// @ts-ignore
	<Defs extends readonly [Type, DefPredicate<ReturnPredicate<Defs[0]>>, ...DefPredicate<ReturnPredicate<Defs[1]>>[]]>(defs: Defs): <Value>(value: Value) => value is Everything<Defs> & Value;
	// @ts-ignore
	<Value>(_:__, value: Value): <Defs extends readonly [Type, Type, ...Type[]]>(defs: Defs) => value is Everything<Defs> & Value;
}
