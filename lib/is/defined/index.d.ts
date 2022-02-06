import { All } from "../index.D";
export declare type Defined = Exclude<All, undefined>;
declare function isDefined(x: Defined): true;
declare function isDefined(x: undefined): false;
declare function isDefined(x: unknown): x is Defined;
export default isDefined;
