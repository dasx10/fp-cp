import _curry2 from "../../../function/curry/2/_/index";
import arrayLikeIndexesFilterCore from "./_/index";
import type { ArrayLikeEachCurryDef } from './../../index.D';

const arrayLikeIndexesFilter: ArrayLikeEachCurryDef<number[]> = _curry2(arrayLikeIndexesFilterCore);
export default arrayLikeIndexesFilter;
