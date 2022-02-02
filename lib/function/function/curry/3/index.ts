import { ParametersConsistent, ParametersConsistentEver } from "../../index.D";
import { ReturnTypeCurry } from "../index.D";

type Ex3 <FirstArgument = any, SecondArgument = any, ThirdArgument = any, Result = any> = (
    firstArgument : FirstArgument,
    secondArgument: SecondArgument,
    thirdArgument : ThirdArgument,
) => Result;

function curry3 <
    FirstArgument,
    SecondArgument,
    ThirdArgument,
    Result
>(
    executor       : Ex3<FirstArgument, SecondArgument, ThirdArgument, Result>,
    firstArgument  : FirstArgument,
    secondArgument : SecondArgument,
    thirdArgument  : ThirdArgument
): Result;

function curry3 <
    FirstArgument,
    SecondArgument,
    ThirdArgument,
    Result
>(
    executor       : Ex3<FirstArgument, SecondArgument, ThirdArgument, Result>,
    firstArgument  : FirstArgument,
    secondArgument : SecondArgument
): (thirdArgument: ThirdArgument) => Result;

function curry3 <
    FirstArgument,
    Executor       extends (...args: [FirstArgument, any, any]) => any,
    StartArguments extends ParametersConsistentEver<Executor>
> (executor: Executor, ...startArguments: StartArguments): ReturnTypeCurry<Executor, StartArguments>;

function curry3 <
    Executor       extends (...args: [any, any, any]) => any,
    StartArguments extends ParametersConsistent<Executor>
> (executor: Executor, ...startArguments: StartArguments): ReturnTypeCurry<Executor, StartArguments>;

// function curry3 <
//     FirstArgument,
//     SecondArgument,
//     ThirdArgument,
//     Result
// >(
//     executor      : Ex3<FirstArgument, SecondArgument, ThirdArgument, Result>,
//     firstArgument : FirstArgument
// ): <ThirdParam extends ThirdArgument | void>(
//     secondArgument : SecondArgument,
//     thirdArgument ?: ThirdParam
// ) => ThirdParam extends infer U
//     ? U extends ThirdArgument
//         ? Result : (thirdArgument: ThirdArgument) => Result : (thirdArgument: ThirdArgument) => Result;

// function curry3 <
//     FirstArgument,
//     SecondArgument,
//     ThirdArgument,
//     Result,

//     SecondParam extends SecondArgument | never,
//     ThirdParam  extends ThirdArgument  | never,
// >(
//     executor: Ex3<FirstArgument, SecondArgument, ThirdArgument, Result>
// ): (
//     firstArgument   : FirstArgument,
//     secondArgument ?: SecondParam,
//     thirdArgument  ?: ThirdParam
// ) => ((thirdArgument: ThirdArgument) => Result) | ((secondArgument: SecondArgument, thirdArgument ?: ThirdParam) => Result) | Result

function curry3 <
    FirstArgument,
    SecondArgument,
    ThirdArgument,
    Result
>(
    executor        : Ex3<FirstArgument, SecondArgument, ThirdArgument, Result>,
    firstArgument  ?: FirstArgument,
    secondArgument ?: SecondArgument,
    thirdArgument  ?: ThirdArgument
) {
    switch (arguments.length) {
        case 1: return function useCurry3 (
            firstArgument   : FirstArgument,
            secondArgument ?: SecondArgument,
            thirdArgument  ?: ThirdArgument
        ) {
            switch (arguments.length) {
                case 1 : {
                    function useCurry3boundOne (secondArgument: SecondArgument): (thirdArgument: ThirdArgument) => Result;
                    function useCurry3boundOne (secondArgument: SecondArgument, thirdArgument: ThirdArgument): Result;
                    function useCurry3boundOne (secondArgument: SecondArgument, thirdArgument?: ThirdArgument) {
                        switch (arguments.length) {
                            case 1 : return (thirdArgument: ThirdArgument) => executor(firstArgument, secondArgument, thirdArgument as ThirdArgument);
                            default: return executor(firstArgument, secondArgument, thirdArgument as ThirdArgument)
                        }
                    }

                    return useCurry3boundOne;
                }
                case 2 : return (thirdArgument: ThirdArgument) => executor(firstArgument, secondArgument as SecondArgument, thirdArgument)
                default: return executor(firstArgument, secondArgument as SecondArgument, thirdArgument as ThirdArgument);
            }
        };
        case 2 : {
            function useCurry3boundTwo (secondArgument: SecondArgument, thirdArgument: ThirdArgument): Result;
            function useCurry3boundTwo (secondArgument: SecondArgument): (thirdArgument: ThirdArgument) => Result;
            function useCurry3boundTwo (secondArgument: SecondArgument, thirdArgument?: ThirdArgument) {
                switch (arguments.length) {
                    case 1  : return (thirdArgument: ThirdArgument) => executor(firstArgument as FirstArgument, secondArgument, thirdArgument);
                    default : return executor(firstArgument as FirstArgument, secondArgument, thirdArgument as ThirdArgument);
                }
            }
            return useCurry3boundTwo;
        }
        case 3 : return (thirdArgument: ThirdArgument) => executor(firstArgument as FirstArgument, secondArgument as SecondArgument, thirdArgument);
        default: return executor(firstArgument as FirstArgument, secondArgument as SecondArgument, thirdArgument as ThirdArgument);
    }
}

export default curry3;