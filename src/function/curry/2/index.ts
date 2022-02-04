import { ParametersConsistent, ParametersConsistentEver } from "../../index.D";
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
    Executor extends (a: any, b: any) => any,
> (executor: Executor): <Args extends ParametersConsistentEver<Executor>>(...args: Args) => ReturnTypeCurry<Executor, Args>;

// function curry2 <FirstArgument, SecondArgument, Result>(executor: (firstArgument: FirstArgument, secondArgument: SecondArgument) => Result): (firstArgument: FirstArgument, secondArgument ?: SecondArgument) => Result | ((secondArgument: SecondArgument) => Result);
function curry2 <A, B, R>(executor: (a: A, b: B) => R, a?: A, b?: B, ...ignore: any[]) {
		switch (arguments.length) {
				case 1: return function useCurry2 (a: A, b?: B) {
						switch (arguments.length) {
								case 1 : return (b: B) => executor(a, b);
								default: return executor(a, b as B);
						}
				};
				case 2 : return (b: B) => executor(a as A, b);
				default: return executor(a as A, b as B);
		}
}

export default curry2;
