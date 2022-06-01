const restCore = <Args extends [unknown, unknown, ...unknown[]], Return>(args: Args, def: (...args: Args) => Return) => def(...args);
export default restCore;
