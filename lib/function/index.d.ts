import apply from './apply/index';
import compose from './compose/index';
import constanta from './const/index';
import curry from './curry/index';
import loop from './loop/index';
import once from './once/index';
import partial from './partial/index';
import pipe from './pipe/index';
declare const def: FunctionConstructor & {
    apply: typeof apply;
    compose: typeof compose;
    constanta: typeof constanta;
    curry: typeof curry;
    loop: typeof loop;
    once: typeof once;
    partial: typeof partial;
    pipe: typeof pipe;
};
export default def;
