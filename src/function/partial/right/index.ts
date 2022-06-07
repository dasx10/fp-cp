// helpers
import arrayReverseCore from "../../../array/reverse/core/index";

// interfaces
import type { DefAny } from "../../index.D";

function partialRight <
    Executor extends DefAny
>(executor: Executor, ...startArguments: Parameters<Executor>) {
    return function usePartialRight (...nextArguments: any) {
      // @ts-ignore
        return executor(...startArguments, ...arrayReverseCore(nextArguments));
    }
}

export default partialRight;
