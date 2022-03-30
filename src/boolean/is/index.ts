import isBoolean from "./boolean/index";
import isFalse from "./false/index";
import isTrue from "./true/index";

export default Object.assign(isBoolean, {
  false : isFalse,
  true  : isTrue,
});
