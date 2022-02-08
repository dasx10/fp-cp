import add from "./calc/add/index";
import average from "./calc/average/index";
declare const number: NumberConstructor & {
    add: typeof add;
    difference: {
        (y: number): (x: number) => number;
        (y: number, x: number): number;
    };
    multiple: {
        (y: number): (x: number) => number;
        (y: number, x: number): number;
    };
    divide: {
        (y: number): (x: number) => number;
        (y: number, x: number): number;
    };
    average: typeof average;
};
export default number;
