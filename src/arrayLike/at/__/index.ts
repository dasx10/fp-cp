function __at <Index extends number> (index: Index): <X>(x: ArrayLike<X>) => X | undefined;
function __at <Index extends number, X> (index: Index, x: ArrayLike<X>): X | undefined;
function __at (index: number, x?: ArrayLike<any>) {
  const isGTZero = index > 0;
  return arguments.length === 1 
    ? (x: ArrayLike<any>) => x[isGTZero ? index : x.length - index] 
    : (<ArrayLike<any>>x)[isGTZero ? index : (<ArrayLike<any>>x).length - index];
}

export default __at;
