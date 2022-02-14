import curry from "../curry/index";

// interfaces
import type { TupleConsistent, TupleDifference } from "../../array/index.D";
import type { AnyDef }  from "../index.D";
import type { Tail }    from "../../array/at/tail/index.D";
import type { DropEnd } from "../../array/drop/end/index.D";

function wrap <
  Result = any,
  OriginalArgs extends any[] = any[],
  Args extends TupleConsistent<OriginalArgs> = TupleConsistent<OriginalArgs>,
>(executor: AnyDef<OriginalArgs, Result>, ...argsExecutor: Args) {
  // @ts-ignore
  return Object.assign(curry(executor, ...argsExecutor), {
    _ <
      WrapResult,
      WrapArguments extends [Result] | [...any[], Result],
      Input extends DropEnd<WrapArguments>
    >(wrapper: 
      AnyDef<WrapArguments, WrapResult>
      | (<A extends Tail<Args>>(x: A) => WrapResult),
      ...argsWrapper: Input
    ) {
      // @ts-ignore
      return wrap((...last: TupleDifference<Args, OriginalArgs>) => wrapper(...argsWrapper, executor(...argsExecutor, ...last)))
    }
  })
}

export default wrap;
