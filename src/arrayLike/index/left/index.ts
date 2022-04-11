import type { IndexLeftDef } from "./index.D";

const indexLeft: IndexLeftDef = (x: ArrayLike<any>) => {
  const { length } = x;
  if (length > 0) return 0;
  return -1;
}

export default indexLeft;
