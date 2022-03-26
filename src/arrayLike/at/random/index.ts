function atRandom <X>(x: ArrayLike<X>): X | undefined {
  return x[~~(Math.random() * x.length)];
}

export default atRandom;
