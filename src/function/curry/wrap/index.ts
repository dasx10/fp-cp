import curryCore from "../core/index";
import type { DefAny, ParametersConsistentEver } from "../../index.D";
import type { NextConsistentParameters } from "../index.D";

const curryWrap = <Def extends DefAny>(def: Def) => <StartArgument extends ParametersConsistentEver<Def>>(...startArguments: StartArgument) => def.length > startArguments.length 
	? def(...startArguments)
	: <NextArguments extends NextConsistentParameters<Def, StartArgument>> (...nextArguments: NextArguments) => curryCore(def,
		// @ts-ignore
		...startArguments, ...nextArguments
	);

export default curryWrap;
