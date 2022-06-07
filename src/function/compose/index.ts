function compose <
	R0,
	Result,
	Args extends readonly unknown[],
>(
	...executors: [
		(x: R0) => Result,
		...((x: unknown) => unknown)[],
		(...args: Args) => unknown
]) {
  return function (...lastExecutorArguments: Args) {
    let result = (executors.pop() as (...args: Args) => unknown)(...lastExecutorArguments);
    // @ts-ignore
    while (executors.length) result = executors.pop()(result);
    return result as Result;
  };
}

export default compose;
