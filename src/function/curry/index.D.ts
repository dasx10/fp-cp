import { TupleConsistentEvery, TupleDifference } from "../../array/index.D";
import { DefAny, ParametersConsistent } from "../index.D";

export type ReturnTypeCurry<
    Executor        extends DefAny,
    InputParameters extends ParametersConsistent<Executor>
> = InputParameters extends Parameters<Executor>
    ? ReturnType<Executor>
    : <NextParameters extends TupleConsistentEvery<TupleDifference<InputParameters, Parameters<Executor>>>>(...next: NextParameters) => ReturnTypeCurry<
        Executor,
        // @ts-ignore
        [...InputParameters, ...NextParameters]
    >;
