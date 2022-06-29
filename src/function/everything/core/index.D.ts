export type Everything <Defs extends readonly unknown[]> = Defs extends readonly [(value: unknown, ...args: unknown[]) => value is infer Value, ...infer NextDefs]
	? Value & Everything<NextDefs>
	: Defs extends readonly [(value: infer Value, ...args: unknown[]) => unknown, ...infer NextDefs]
		? Value & Everything<NextDefs>
		: Defs extends readonly ((value: unknown) => value is infer Value)[]
			? Value
			: Defs extends readonly ((value: infer Value) => unknown)[]
				? Value
				: Defs extends readonly (() => unknown)[]
					? void
					: unknown;


export type DefPredicate <Value extends unknown = unknown, Predicate extends unknown = unknown> = (value: Value, ...args: unknown[]) => value is Predicate & Value;
export type ReturnPredicate<Def extends DefPredicate> = Def extends (value: unknown, ...args: unknown[]) => value is infer Value 
	? Value
	: Def extends (value: infer Value, ...args: unknown[]) => unknown
		? Value
		: unknown;

export type EverythingCore <Type extends DefPredicate = DefPredicate> = <
	Defs extends readonly [Type, Type, ...Type[]],
	Value
>(defs: Defs, value: Value) => value is Everything<Defs> & Value;
