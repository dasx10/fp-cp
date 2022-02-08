import chars from './chars/index';
import charAt from './char/at/index';
import toLowerCase from './case/lower/index';
import numeric from './replace/pattern/numeric/index';

const string = Object.assign(String, {
  chars,
  charAt,
  toLowerCase,
  numeric
});

export default string;
