/* eslint-disable @typescript-eslint/ban-ts-comment */
import curryCount from './count/index';
import type { ParametersConsistent } from '../index.D';
import type { ReturnTypeCurry }      from './index.D';
import curryRight from './right/index';

/**
 * @description returns a series of `functions` or `result`.
 * depends on the number of input parameters
 * @example
 * const add = (a: number, b: number): number => a + b; // function (a: number, b: number) => number
 * const addCurry = curry(add); // (a: number, b?: number) => ((b: number) => number) | number
 * const add2 = addCurry(2); // (b: number) => number
 * const add3 = addCurry(3); // (b: number) => number
 * const sum2and3 = add2(3); // 5
 * const sum3and3 = add3(3); // 6
 * const sum = addCurry(1, 2); // 3
 */
function curry <
    Executor       extends (y: any, x: any, ...next: any[]) => any,
    StartArguments extends ParametersConsistent<Executor>,
>(
  executor          : Executor,
  ...startArguments : StartArguments
): ReturnTypeCurry<Executor, StartArguments> {
  if (startArguments.length < executor.length) {
    // @ts-ignore
    return function useCurry(...nextArgument) {
      // @ts-ignore
      return curry(executor, ...startArguments, ...nextArgument);
    };
  }
	// @ts-ignore
  return executor(...startArguments);
}

export default Object.assign(curry, {
	count: curryCount,
	right: curryRight,
});
