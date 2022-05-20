import addLeft  from './left/index';
import addRight from './right/index';

export default Object.assign(addRight, {
  left: addLeft,
});
