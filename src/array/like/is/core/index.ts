import type { ArrayLikeIsCore } from './index.D';

const arrayLikeIsCore = ((x: unknown) => {
  return Boolean(x && (<{length:number}>x).length >= 0);
}) as ArrayLikeIsCore

export default arrayLikeIsCore;
