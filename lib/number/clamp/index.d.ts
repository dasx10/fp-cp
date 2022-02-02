import { ExcludeNumber } from "../index.D";
declare function clamp<MIN extends number, MAX extends number, X extends number>(minimum: MIN, maximum: ExcludeNumber<MAX, MIN>, x: ExcludeNumber<X, MAX | MIN>): MAX | MIN | X;
declare function clamp<MIN extends number, MAX extends number>(minimum: MIN, maximum: ExcludeNumber<MAX, MIN>): <X extends number>(x: ExcludeNumber<X, MAX | MIN>) => MAX | MIN | X;
declare function clamp<MIN extends number>(minimum: MIN): <MAX extends number, X extends number, Args extends [] | [ExcludeNumber<X, MAX | MIN>]>(maximum: ExcludeNumber<MAX, MIN>, ...x: Args) => Args extends [X] ? MAX | MIN | X : <X>(x: X) => MAX | MIN | X;
export default clamp;
