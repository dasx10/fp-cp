import { All } from "../index.D";
import { IS_DEFINED } from "./index.D";

export type Defined = Exclude<All, undefined>;

// @ts-ignore
function isDefined <X>(x: X): IS_DEFINED<X>;
// @ts-ignore
function isDefined (x: unknown): x is Defined;

// @ts-ignore
const isDefined = (x: unknown) => x !== void 0;
export default isDefined;
