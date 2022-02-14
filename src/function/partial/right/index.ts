// helpers
import reverse from "../../../array/reverse/index";

// interfaces
import type { AnyDef } from "../../index.D";

function partialRight <
    Executor extends AnyDef
>(executor: Executor, ...startArguments: Parameters<Executor>) {
    return function usePartialRight (...nextArguments: any) {
      // @ts-ignore
        return executor(...startArguments, ...reverse(nextArguments));
    }
}

export default partialRight;
