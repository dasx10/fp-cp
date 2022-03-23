
import atLeft  from "./left/index";
import atRight from "./right/index";

const at = Object.assign(atLeft, {
  right: atRight,
});

export default at;
