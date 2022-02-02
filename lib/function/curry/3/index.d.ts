import { ParametersConsistent, ParametersConsistentEver } from "../../index.D";
import { ReturnTypeCurry } from "../index.D";
declare type Ex3<FirstArgument = any, SecondArgument = any, ThirdArgument = any, Result = any> = (firstArgument: FirstArgument, secondArgument: SecondArgument, thirdArgument: ThirdArgument) => Result;
declare function curry3<FirstArgument, SecondArgument, ThirdArgument, Result>(executor: Ex3<FirstArgument, SecondArgument, ThirdArgument, Result>, firstArgument: FirstArgument, secondArgument: SecondArgument, thirdArgument: ThirdArgument): Result;
declare function curry3<FirstArgument, SecondArgument, ThirdArgument, Result>(executor: Ex3<FirstArgument, SecondArgument, ThirdArgument, Result>, firstArgument: FirstArgument, secondArgument: SecondArgument): (thirdArgument: ThirdArgument) => Result;
declare function curry3<FirstArgument, Executor extends (...args: [FirstArgument, any, any]) => any, StartArguments extends ParametersConsistentEver<Executor>>(executor: Executor, ...startArguments: StartArguments): ReturnTypeCurry<Executor, StartArguments>;
declare function curry3<Executor extends (...args: [any, any, any]) => any, StartArguments extends ParametersConsistent<Executor>>(executor: Executor, ...startArguments: StartArguments): ReturnTypeCurry<Executor, StartArguments>;
export default curry3;
