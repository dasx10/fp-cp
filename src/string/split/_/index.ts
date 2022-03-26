import { Split } from "./index.D";

const _split = <SEPARATOR extends string, X extends string>(separator: SEPARATOR | RegExp, x: X): Split<SEPARATOR, X> => {
  return x.split(separator) as Split<SEPARATOR, X>;
}

export default _split;
