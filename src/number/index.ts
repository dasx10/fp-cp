import add from "./calc/add/index"

const lib = {
  add,
}

const number = Object.assign(Number, lib);
export default number;
