function arrayLikeIsArrayLike (x: ArrayLike<unknown>): true;
function arrayLikeIsArrayLike <X extends number | boolean | symbol | undefined | null | bigint | Number | Boolean | Symbol | BigInt>(x: X): false;
function arrayLikeIsArrayLike (x: unknown): x is ArrayLike<unknown>;
function arrayLikeIsArrayLike (x: unknown) {
  return Boolean(x && (<{length:number}>x).length >= 0);
}

export default arrayLikeIsArrayLike;

const a = 'length' in [];
