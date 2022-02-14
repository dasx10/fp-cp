import { TupleConsistentEvery, TupleDifference } from "../../array/index.D";
import { AnyDef, ParametersConsistent } from "../index.D";

export type ReturnTypeCurry<
    Executor        extends AnyDef,
    InputParameters extends ParametersConsistent<Executor>
> = InputParameters extends Parameters<Executor>
    ? ReturnType<Executor>
    : <NextParameters extends TupleConsistentEvery<TupleDifference<InputParameters, Parameters<Executor>>>>(...next: NextParameters) => ReturnTypeCurry<
        Executor,
        // @ts-ignore
        [...InputParameters, ...NextParameters]
    >;
