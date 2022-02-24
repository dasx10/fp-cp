import { Def1 } from "../../index.D";

function unApply <Args extends any[], Return>(executor: Def1<Args, Return>) {
  return (...args: Args) => executor(args);
}

export default unApply;
