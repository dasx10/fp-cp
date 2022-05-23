import { IS_DEFINED } from './index.d';
import { All } from "../index.D";

export type Defined = Exclude<All, undefined>;

// @ts-ignore
function isDefined <X extends Defined>(x: X): true;
// @ts-ignore
function isDefined <X extends All>(x: X): x is Exclude<X, undefined>;
// @ts-ignore
function isDefined (x: unknown): x is Defined;

// @ts-ignore
const isDefined = (x: unknown) => x !== void 0;
export default isDefined;
