import { BreakArrayRight, TupleConsistentEvery } from "../../array/index.D";
import { ParametersConsistent } from "../index.D";

export type MaybeReturnTypeCurry <
	Def   extends (...args: any[]) => any,
	StartArgs extends ParametersConsistent<Def>
> = ReturnType<Def>
	| (<NextArgs extends NextConsistentParameters<Def, StartArgs>>(...nextArgs: NextArgs) => MaybeReturnTypeCurry<
		Def,
		// @ts-ignore
		[...StartArgs, ...NextArgs]
	>);

export type ReturnTypeCurry<
	Def  extends (y : any, x: any, ...args: any[]) => any,
	StartArgsArgs extends ParametersConsistent<Def>
> = StartArgsArgs extends Parameters<Def>
	? ReturnType<Def>
	: <NextArgsParameters extends NextConsistentParameters<Def, StartArgsArgs>>(...nextArgs: NextArgsParameters) => ReturnTypeCurry<
		Def,
		// @ts-ignore
		[...StartArgsArgs, ...NextArgsParameters]
>;

export type NextConsistentParameters <Def extends (...args: any[]) => any, Args extends ParametersConsistent<Def>> = TupleConsistentEvery<BreakArrayRight<Parameters<Def>, Args>>;
