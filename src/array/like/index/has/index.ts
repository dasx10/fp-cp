import _curry2              from "../../../function/curry/2/_/index";
import arrayLikeIndexHasDef from "./contract/index";
import arrayLikeIndexHasLib from "./lib/index";


const arrayLikeIndexHas = Object.assign(arrayLikeIndexHasDef, arrayLikeIndexHasLib);

export default arrayLikeIndexHas;
