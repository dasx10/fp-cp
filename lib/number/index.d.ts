import add from "./calc/add/index";
declare const number: NumberConstructor & {
    add: typeof add;
};
export default number;
