import stringCore from './core/index';
import stringLib from './lib/index';
import type { StringMain } from './index.D';

const string: StringMain = Object.assign(stringCore, stringLib);

export default string;
