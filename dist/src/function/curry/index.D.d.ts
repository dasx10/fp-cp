import { TupleConsistentEvery, TupleDifference } from "../../array/index.D";
import { AnyFunction, ParametersConsistent } from "../index.D";
export declare type ReturnTypeCurry<Executor extends AnyFunction, InputParameters extends ParametersConsistent<Executor>> = InputParameters extends Parameters<Executor> ? ReturnType<Executor> : <NextParameters extends TupleConsistentEvery<TupleDifference<InputParameters, Parameters<Executor>>>>(...next: NextParameters) => ReturnTypeCurry<Executor, [
    ...InputParameters,
    ...NextParameters
]>;
