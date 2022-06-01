const apply = <T, Args extends unknown[], Return>(instance: T, args: Args, def: (this: T, ...args: Args) => Return) => def.apply(instance, args);
export default apply;
