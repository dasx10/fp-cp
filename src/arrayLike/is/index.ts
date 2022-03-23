import isEmpty from "./empty/index";
// import isNot from "./not/index";

function arrayLikeIs (x: ArrayLike<any>): true;
function arrayLikeIs <X extends number | boolean | symbol | undefined | null | bigint | Number | Boolean | Symbol | BigInt>(x: X): false;
function arrayLikeIs (x: unknown): x is ArrayLike<unknown>;
function arrayLikeIs (x: unknown) {
  return Boolean(x && (<any>x).length >= 0);
}

const is = Object.assign(arrayLikeIs, {
  empty: isEmpty,
  // not  : isNot,
});

export default is;
