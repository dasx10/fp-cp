import { TupleDifference } from "../../array/index.D";
import { AnyFunction, ParametersConsistentEver } from "../index.D";

function partial <
    Executor       extends AnyFunction,
    FirstParameter extends ParametersConsistentEver<Executor>
>(executor: Executor, ...startArguments: FirstParameter) {
    return function (...nextArguments: TupleDifference<FirstParameter, Parameters<Executor>>) {
        return executor(...startArguments, ...nextArguments);
    }
}

export default partial;