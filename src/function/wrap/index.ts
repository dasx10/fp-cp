import curry from "../curry/index";
import type { TupleConsistent } from "../../array/index.D";
import type { DefAny } from "../index.D";
import type { ArrayReverse } from "../../_array/reverse/index.D";

type LastOmit<Tuple extends any[]> = ArrayReverse<Tuple> extends [infer F, ...infer P]
  ? ArrayReverse<P> : Tuple;

function wrap <
  Result = any,
  OriginalArgs extends any[] = any[],
  Args extends TupleConsistent<OriginalArgs> = TupleConsistent<OriginalArgs>,
>(executor: DefAny<OriginalArgs, Result>, ...argsExecutor: Args) {
  // @ts-ignore
  return Object.assign(curry(executor, ...argsExecutor), {
    _ <
      WrapResult,
      WrapArguments extends [Result] | [...any[], Result],
      Input extends LastOmit<WrapArguments>
    >(wrapper: 
      DefAny<WrapArguments, WrapResult>
      | (<A extends Tail<Args>>(x: A) => WrapResult),
      ...argsWrapper: Input
    ) {
      // @ts-ignore
      return wrap((...last: TupleDifference<Args, OriginalArgs>) => wrapper(...argsWrapper, executor(...argsExecutor, ...last)))
    }
  })
}

export default wrap;
