import type arrayLikeLib  from "../../array/like/lib/index";
import type { StringLib } from "./index.D";

const stringLib: StringLib = Object.assign(arrayLikeLib, {});

export default stringLib;
