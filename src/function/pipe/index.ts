import { AnyFunction } from "../index.D";

function pipe <
    FirstExecutor  extends AnyFunction,
    SecondExecutor extends (arg: ReturnType<FirstExecutor>) => any,
> (firstExecutor: FirstExecutor, secondExecutor: SecondExecutor): (...args: Parameters<FirstExecutor>) => ReturnType<SecondExecutor>;

function pipe <
    FirstExecutor  extends AnyFunction,
    SecondExecutor extends (arg: ReturnType<FirstExecutor>) => any,
    NextFunctions extends  [(arg: ReturnType<SecondExecutor>) => any, ...((param: any) => any)[]],
	LastFunction  extends AnyFunction
> (firstExecutor: FirstExecutor, secondExecutor: SecondExecutor, ...functions: [...NextFunctions, LastFunction] | [LastFunction]): (...args: Parameters<FirstExecutor>) => ReturnType<LastFunction>;

function pipe <
    FirstExecutor  extends AnyFunction,
    SecondExecutor extends (arg: ReturnType<FirstExecutor>) => any,
    NextFunctions  extends ((arg: any) => any)[]
> (firstExecutor: FirstExecutor, secondExecutor: SecondExecutor, ...functions: NextFunctions) {
    return function piped(...args: Parameters<FirstExecutor>) {
        let result = secondExecutor(firstExecutor(...args));
        const { length } = functions;
        if (length) {
            let index = 0;
            while (index < length) {
                result = functions[index](result);
                index++;
            }
        }
        return result;
    };
}

export default pipe;