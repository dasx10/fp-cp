type FS <Arg, Result, FS extends [] | [(arg: Result) => any, ...((arg: any) => any)[]]> = [...[], (arg: Arg) => Result];

const pipe = <
  Args extends any[],
  R1,
  R2,
  FS extends ((arg: any) => any)[]
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
