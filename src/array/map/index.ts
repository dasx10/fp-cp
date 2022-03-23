import _map    from "./_/index";
import _curry2 from "../../function/curry/2/_/index";

// interfaces
import { ArrayMapDef } from "./index.D";
import mapRight from "./right/index";

const map: ArrayMapDef = _curry2(_map);

export default Object.assign(map, {
  right: mapRight,
});
