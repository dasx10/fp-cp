type FS <Arg, Result, FS extends [] | [(arg: Result) => unknown, ...((arg: unknown) => unknown)[]]> = [...[], (arg: Arg) => Result];

const pipe = <
  Args extends unknown[],
  R1,
  R2,
  FS extends ((arg: unknown) => any)[]
> (f1: (...args: Args) => R1, f2: (arg: R1) => R2, ...functions: FS) => (...args: Args) => {
  let result = f2(f1(...args));
    const { length } = functions;
    if (length) {
      let index = 0;
      while (index < length) {
        result = functions[index](result);
        index++;
      }
    }
    return result;
}
