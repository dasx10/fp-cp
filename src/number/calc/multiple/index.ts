/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-shadow */
function multiple(y: number): (x: number) => number;
function multiple(y: number, x: number): number;
function multiple(y: number, x?: number) {
  if (arguments.length === 1) {
    return function useMultiple(x: number) {
      return x * y;
    };
  }

  return x as number + y;
}

export default multiple;
