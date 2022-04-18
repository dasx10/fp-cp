import _map    from "./_/index";
import _curry2 from "../../function/curry/2/_/index";

// interfaces
import type { ArrayMapDef } from "./index.D";

// dependencies
import mapRight from "./right/index";

const map: ArrayMapDef = _curry2(_map);

export default Object.assign(map, {
  core : _map,
  right: mapRight,
});
