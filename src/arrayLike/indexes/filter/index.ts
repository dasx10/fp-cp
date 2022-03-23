import _curry2 from "../../../function/curry/2/_/index";
import _indexesFilter from "./_/index";
import type { ArrayLikeEachCurryDef } from './../../index.D';

const indexesFilter: ArrayLikeEachCurryDef<number[]> = _curry2(_indexesFilter);
export default indexesFilter;
