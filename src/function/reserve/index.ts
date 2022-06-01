const functionReverse = (def: any, ...args: any[]) => (...nextArgs: any[]) => def(...nextArgs.reverse(), ...args.reverse());
export default functionReverse;
