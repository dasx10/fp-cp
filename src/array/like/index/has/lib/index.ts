// core
import arrayLikeIndexHasCore         from "../core/index";
import arrayLikeIndexHasDirect       from "../direct/index";
import arrayLikeIndexHasInvert       from "../invert/index";

// interfaces
import type { ArrayLikeIndexHasLib } from './index.D';

const arrayLikeIndexHasLib: ArrayLikeIndexHasLib = {
	core   : arrayLikeIndexHasCore,
	direct : arrayLikeIndexHasDirect,
	invert : arrayLikeIndexHasInvert,
}

export default arrayLikeIndexHasLib;
