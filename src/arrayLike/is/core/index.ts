function arrayLikeIsCore (x: ArrayLike<any>): true;
function arrayLikeIsCore <X extends number | boolean | symbol | undefined | null | bigint | Number | Boolean | Symbol | BigInt>(x: X): false;
function arrayLikeIsCore (x: unknown): x is ArrayLike<unknown>;
function arrayLikeIsCore (x: unknown) {
  return Boolean(x && (<any>x).length >= 0);
}

export default arrayLikeIsCore;
