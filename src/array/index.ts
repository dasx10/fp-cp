// AT
import at   from './at/index';
import head from './at/head/index';
import tail from './at/tail/index';

const array = Object.assign(Array, {
  at,
  head,
  tail,
});

export default array;
