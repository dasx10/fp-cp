import { ParametersConsistent } from "../../index.D";
import { ReturnTypeCurry } from "../index.D";

/** 
 * optimization curry 2 arguments
 * @example
 * const sumC    = curry2((a: number, b: number) => a + b);  // [function(a: number, b: number): number];
 * const addOne  = sumCurry(1);                              // [function(b: number): number];
 * const sumAdd1 = addOne(3);                                // 4
 * const sum     = sumCurry(1, 2);                           // 3
 * 
 * const add2    = curry2((a: number, b: number) => a + b, 2); // [function(b: number): number];
 * const sumAdd2 = add2(3, 2);                                 // 5
 * */
function curry2 <FirstArgument, SecondArgument, Result>(executor: (firstArgument: FirstArgument, secondArgument: SecondArgument) => Result, firstArgument: FirstArgument, secondArgument: SecondArgument, ...ignore: any[]): Result;
function curry2 <FirstArgument, SecondArgument, Result>(executor: (firstArgument: FirstArgument, secondArgument: SecondArgument) => Result, firstArgument: FirstArgument): (secondArgument: SecondArgument, ...ignore: any[]) => Result;

function curry2 <
    Executor       extends (...args: [any, any]) => any,
    StartArguments extends ParametersConsistent<Executor>
> (executor: Executor, ...startArguments: StartArguments): ReturnTypeCurry<Executor, StartArguments>;

// function curry2 <FirstArgument, SecondArgument, Result>(executor: (firstArgument: FirstArgument, secondArgument: SecondArgument) => Result): (firstArgument: FirstArgument, secondArgument ?: SecondArgument) => Result | ((secondArgument: SecondArgument) => Result);
function curry2 <FirstArgument, SecondArgument, Result>(executor: (firstArgument: FirstArgument, secondArgument: SecondArgument) => Result, firstArgument?: FirstArgument, secondArgument?: SecondArgument, ...ignore: any[]) {
		switch (arguments.length) {
				case 1: return function useCurry2 (firstArgument: FirstArgument, secondArgument?: SecondArgument) {
						switch (arguments.length) {
								case 1 : return (secondArgument: SecondArgument) => executor(firstArgument, secondArgument);
								default: return executor(firstArgument, secondArgument as SecondArgument);
						}
				};
				case 2 : return (secondArgument: SecondArgument) => executor(firstArgument as FirstArgument, secondArgument);
				default: return executor(firstArgument as FirstArgument, secondArgument as SecondArgument);
		}
}

export default curry2;
