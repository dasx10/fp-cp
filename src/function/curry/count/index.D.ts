import type { TupleLimitLeft }                                 from './../../../array/limit/left/_/index.D';
import type { ParametersConsistent }                           from "../../index.D";
import type { MaybeReturnTypeCurry, NextConsistentParameters } from '../index.D';

export type ResultTypeCurryCount <
	Count     extends number,
	Def       extends (...args: any[]) => any,
	StartArgs extends ParametersConsistent<Def>
> = Count extends TupleLimitLeft<Count, StartArgs>['length']
	? ReturnType<Def>
	: <NextArgs extends NextConsistentParameters<Def, StartArgs>>(...nextArgs: NextArgs) => ReturnTypeCurryCount<
		Count, Def,
		// @ts-ignore
		[...StartArgs, ...NextArgs]>

export type ReturnTypeCurryCount <
	Count     extends number,
	Def       extends (...args: any[]) => any,
	StartArgs extends ParametersConsistent<Def>
> = number extends Count
	? MaybeReturnTypeCurry<Def, StartArgs>
	: ResultTypeCurryCount<Count, Def, StartArgs>;
