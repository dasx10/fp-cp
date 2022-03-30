import type { Unboxing } from "../index.D";
import type { InputUniq, Uniq } from "./index.D";

const uniq = <X extends readonly any[]>(x: X): Uniq<X>[] => {
  return [...new Set<Unboxing<X>>(x)];
}

export default uniq;
