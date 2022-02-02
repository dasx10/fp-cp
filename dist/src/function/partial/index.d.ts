import { TupleDifference } from "../../array/index.D";
import { AnyFunction, ParametersConsistentEver } from "../index.D";
declare function partial<Executor extends AnyFunction, FirstParameter extends ParametersConsistentEver<Executor>>(executor: Executor, ...startArguments: FirstParameter): (...nextArguments: TupleDifference<FirstParameter, Parameters<Executor>>) => any;
export default partial;
