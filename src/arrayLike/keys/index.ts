import indexes    from "../../../backup/array/indexes/index";
import map        from "../../../backup/array/map/index";
import pipe       from "../../function/pipe/index";
import stringCore from "../../string/core/index";

const arrayLikeKeys = pipe(indexes, map(stringCore)) as <X extends ArrayLike<unknown>>(x: X) => `${number}`[];
export default arrayLikeKeys;
