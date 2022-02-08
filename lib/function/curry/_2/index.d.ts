import { FirstParameter, SecondParameter } from "../../index.D";
declare type F2<Y = any, X = any, R = any> = (y: Y, x: X) => R;
declare function _curry2<Y extends FirstParameter<Executor>, X extends SecondParameter<Executor>, R extends ReturnType<Executor>, Executor extends F2>(executor: Executor | F2<Y, X, R>): {
    (y: Y): (x: X) => R;
    (y: Y, x: X): R;
};
export default _curry2;
