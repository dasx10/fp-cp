import chars from './chars/index';
import charAt from './char/at/index';
import toLowerCase from './case/lower/index';

const string = Object.assign(String, {
  chars,
  charAt,
  toLowerCase,
});

export default string;
