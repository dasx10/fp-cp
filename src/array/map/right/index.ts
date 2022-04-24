import _mapRight from "./_/index";
import _curry2 from "../../../function/curry/2/_/index";
import type { ArrayMapDef } from "../index.D";

//@ts-ignore
const mapRight: ArrayMapDef = _curry2(_mapRight);

export default Object.assign(mapRight, {
  core: _mapRight,
});
