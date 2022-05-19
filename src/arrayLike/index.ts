// core
import arrayCore     from "../array/core/index";

// dependencies
import arrayLikeLib  from "./lib/index";

const arrayLike = Object.assign(arrayCore, arrayLikeLib);

export default arrayLike;
