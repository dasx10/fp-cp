import { FirstParameter } from './../../../function/index.D';
declare function findIndex<Executor extends <ArrayElement>(element: ArrayElement, index: number, array: ArrayElement[]) => any>(executor: Executor): (array: FirstParameter<Executor>[]) => number;
export default findIndex;
