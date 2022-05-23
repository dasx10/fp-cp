import type { BreakArrayRight, TupleConsistentEvery } from "../../../../backup/array/index.D";
import type { DefAny, ParametersConsistentReverse, ParametersReverse } from "../../index.D";

export type ReturnTypeCurryRight <
	Def            extends (y: unknown, x: unknown, ...next: unknown[]) => unknown,
	StartArguments extends ParametersConsistentReverse<Def>
> = ParametersReverse<Def> extends StartArguments
	? ReturnType<Def> : StartArguments['length'] extends Parameters<Def>['length'] ? ReturnType<Def>
	: <NextParameters extends NextConsistentParametersReverse<Def, StartArguments>>(...nextArgs: NextParameters) => ReturnTypeCurryRight<Def,
	  // @ts-ignore
		[...StartArguments, ...NextParameters]
	>;

export type NextConsistentParametersReverse <Def extends (...args: unknown[]) => unknown, Args extends ParametersConsistentReverse<Def>> = TupleConsistentEvery<BreakArrayRight<ParametersReverse<Def>, Args>>;
