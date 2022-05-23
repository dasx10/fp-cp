import { BreakArrayRight, TupleConsistentEvery } from "../../../backup/array/index.D";
import { ParametersConsistent } from "../index.D";

export type MaybeReturnTypeCurry <
	Def   extends (...args: unknown[]) => unknown,
	StartArgs extends ParametersConsistent<Def>
> = ReturnType<Def>
	| (<NextArgs extends NextConsistentParameters<Def, StartArgs>>(...nextArgs: NextArgs) => MaybeReturnTypeCurry<
		Def,
		// @ts-ignore
		[...StartArgs, ...NextArgs]
	>);

export type ReturnTypeCurry<
	Def  extends (y : unknown, x: unknown, ...args: unknown[]) => unknown,
	StartArgsArgs extends ParametersConsistent<Def>
> = StartArgsArgs extends Parameters<Def>
	? ReturnType<Def> : StartArgsArgs['length'] extends Parameters<Def>['length'] ? ReturnType<Def>
	: <NextArgsParameters extends NextConsistentParameters<Def, StartArgsArgs>>(...nextArgs: NextArgsParameters) => ReturnTypeCurry<
		Def,
		// @ts-ignore
		[...StartArgsArgs, ...NextArgsParameters]
>;

export type NextConsistentParameters <Def extends (...args: unknown[]) => unknown, Args extends ParametersConsistent<Def>> = TupleConsistentEvery<BreakArrayRight<Parameters<Def>, Args>>;
