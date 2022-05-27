import { Def1 } from "../../index.D";

function unApply <Args extends readonly unknown[], Return>(executor: Def1<Args, Return>) {
  return (...args: Args) => executor(args);
}

export default unApply;
