import indexes from "../../array/indexes/index";
import map from "../../array/map/index";
import pipe from "../../function/pipe/index";
import stringCore from "../../string/core/index";

const arrayLikeKeys = pipe(indexes, map(stringCore)) as <X extends ArrayLike<any>>(x: X) => `${number}`[];
export default arrayLikeKeys;
