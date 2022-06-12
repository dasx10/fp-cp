// const reverse = require("../../../array/reverse");

import arrayReverseCore from "../../../array/like/revers/core/index";
import { ParametersConsistentReverse } from "../../index.D";
import { NextConsistentParametersReverse, ReturnTypeCurryRight } from "./index.D";


function curryRight <
  Def            extends (y: unknown, x: unknown, ...next: unknown[]) => unknown,
	StartArguments extends ParametersConsistentReverse<Def>,
>(def: Def, ...startArguments: StartArguments): ReturnTypeCurryRight<Def, StartArguments> {
	if (def.length < startArguments.length)
		// @ts-ignore
		return <NextParameters extends NextConsistentParametersReverse<Def, StartArguments>>(...nextArguments: NextParameters) => curryRight(def, ...startArguments, ...nextArguments);
	// @ts-ignore
	return def(...arrayReverseCore(startArguments));
}

export default curryRight;
