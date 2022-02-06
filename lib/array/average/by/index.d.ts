import { ArrayIterateFunction } from '../../index.D';
declare function averageBy<ArrayElement>(executor: ArrayIterateFunction<ArrayElement, number>, array: ArrayElement[]): number;
declare function averageBy<ArrayElement>(executor: ArrayIterateFunction<ArrayElement, number>): (array: ArrayElement[]) => number;
declare function averageBy<ArrayElement>(executor: (element: ArrayElement, index: number, array: ArrayElement[]) => number, array: ArrayElement[]): number;
export default averageBy;
