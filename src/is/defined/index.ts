import { All } from "../index.D";

export type Defined = Exclude<All, undefined>;

// @ts-ignore
function isDefined (x: Defined): true;
// @ts-ignore
function isDefined (x: undefined): false;
// @ts-ignore
function isDefined (x: unknown): x is Defined;

// @ts-ignore
const isDefined = (x: unknown) => x !== void 0;
export default isDefined;
