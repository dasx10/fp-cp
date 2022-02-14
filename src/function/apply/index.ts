import { AnyDef } from '../index.D';

function apply <Args extends any[], R>(executor: AnyDef<Args, R>, args: Args): R;
function apply <Executor extends AnyDef>(executor: Executor) : <Args extends Parameters<Executor>>(args: Args) => ReturnType<Executor>;
function apply <Executor extends AnyDef>(executor: Executor, args?: Parameters<Executor>) {
  return arguments.length === 1 ? (args: Parameters<Executor>) => executor(...args) : executor(...args as Parameters<Executor>);
}

export default apply;
