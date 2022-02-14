import { TupleDifference } from "../../array/index.D";
import { AnyDef, ParametersConsistentEver } from "../index.D";

function partial <
    Executor       extends AnyDef,
    FirstParameter extends ParametersConsistentEver<Executor>
>(executor: Executor, ...startArguments: FirstParameter) {
    return function (...nextArguments: TupleDifference<FirstParameter, Parameters<Executor>>) {
        return executor(...startArguments, ...nextArguments);
    }
}

export default partial;
