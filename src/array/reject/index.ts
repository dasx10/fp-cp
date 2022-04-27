// core
import _curry2 from "../../function/curry/2/_/index";
import _reject from "./_/index";

// interfaces
import type { RejectDef } from "./index.D";

const reject = _curry2(_reject) as RejectDef;

export default reject;
