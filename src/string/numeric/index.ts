import { Numeric } from "./index.D";

function numeric <X extends string>(x: X): Numeric<X> {
  return x.replace(/[^0-9]/, '') as Numeric<X>;
}

export default numeric;
