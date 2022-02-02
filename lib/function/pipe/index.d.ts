import { AnyFunction } from "../index.D";
declare function pipe<FirstExecutor extends AnyFunction, SecondExecutor extends (arg: ReturnType<FirstExecutor>) => any>(firstExecutor: FirstExecutor, secondExecutor: SecondExecutor): (...args: Parameters<FirstExecutor>) => ReturnType<SecondExecutor>;
declare function pipe<FirstExecutor extends AnyFunction, SecondExecutor extends (arg: ReturnType<FirstExecutor>) => any, NextFunctions extends [(arg: ReturnType<SecondExecutor>) => any, ...((param: any) => any)[]], LastFunction extends AnyFunction>(firstExecutor: FirstExecutor, secondExecutor: SecondExecutor, ...functions: [...NextFunctions, LastFunction] | [LastFunction]): (...args: Parameters<FirstExecutor>) => ReturnType<LastFunction>;
export default pipe;
