import arrayLikeFindEntryDef from "./contract/index";
import arrayLikeFindEntryLib from "./lib/index";
import { ArrayLikeFindEntryMain } from './index.D';


const arrayLikeFindEntry: ArrayLikeFindEntryMain = Object.assign(arrayLikeFindEntryDef, arrayLikeFindEntryLib);
export default arrayLikeFindEntry;
