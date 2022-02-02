// helpers
import reverse         from "../../../array/reverse";

// interfaces
import { AnyFunction } from "../../index.D";

function partialRight <
    Executor extends AnyFunction
>(executor: Executor, ...startArguments: Parameters<Executor>) {
    return function usePartialRight (...nextArguments: any) {
        return executor(...startArguments, ...reverse(nextArguments));
    }
}

export default partialRight;