// const reverse = require("../../../array/reverse");

import arrayReverse from "../../../../backup/array/reverse/index";
import { ParametersConsistent, ParametersConsistentReverse } from "../../index.D";
import { NextConsistentParametersReverse, ReturnTypeCurryRight } from "./index.D";

// /**
//  * @param {Executor & ((...startArguments: any[]) => any)} executor 
//  * @param  {any[]} startArguments
//  * @returns {ReturnType<Executor> | ((...nextArguments: any[]) => ReturnType<Executor>)}
//  * @template Executor
//  */
// function curryRight (executor, ...startArguments) {
//     // @ts-ignore
//     if (startArguments.length < executor.length) return function useCurryRight (...nextArguments) {
//         return curryRight(executor, ...startArguments, ...nextArguments);
//     }

//     return executor(...reverse(startArguments));
// }

// module.exports = curryRight;


function curryRight <
  Def            extends (y: any, x: any, ...next: any[]) => any,
	StartArguments extends ParametersConsistentReverse<Def>,
>(def: Def, ...startArguments: StartArguments): ReturnTypeCurryRight<Def, StartArguments> {
	if (def.length < startArguments.length)
		// @ts-ignore
		return <NextParameters extends NextConsistentParametersReverse<Def, StartArguments>>(...nextArguments: NextParameters) => curryRight(def, ...startArguments, ...nextArguments);
	// @ts-ignore
	return def(...arrayReverse(startArguments));
}

export default curryRight;
