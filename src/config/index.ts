
export type  ___ = symbol | '…_ ← ƒ(…_, ← …×s) ⇒ ∏ ≡ ƒ(…×s): ∏';
export const ___ = Symbol.for('ƒ(…, ') as ___;

const config = {
	/** Multi placeholder */
	[Symbol.iterator]: function* PlaceholderIterator(): Generator<___, void, void> {
    yield ___;
  },
  [Symbol.for('placeholder')]: true,
}

export default config;
