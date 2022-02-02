import { FirstParameter } from '../../function/index.D';
import { ArrayIterateFunction } from './../index.D';
declare function groupBy<Executor extends ArrayIterateFunction<any, PropertyKey>>(executor: Executor): (array: FirstParameter<Executor>[]) => any;
export default groupBy;
