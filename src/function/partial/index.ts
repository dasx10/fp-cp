import type { TupleDifference } from "../../array/index.D";
import type { DefAny, ParametersConsistentEver } from "../index.D";

function partial <
    Executor       extends DefAny,
    FirstParameter extends ParametersConsistentEver<Executor>
>(executor: Executor, ...startArguments: FirstParameter) {
    return function (...nextArguments: TupleDifference<FirstParameter, Parameters<Executor>>) {
        return executor(...startArguments, ...nextArguments);
    }
}

export default partial;
