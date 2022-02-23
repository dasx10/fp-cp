import { At } from "../index.D";

const _at = <
  Index extends number, X extends any[]
>(index: Index, x: X): At<Index, X> => x[index < 0 ? -index : index];

export default _at;
