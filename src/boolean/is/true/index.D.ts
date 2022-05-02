import { ErrorArgument } from "../../../function/index.D";

export type IS_TRUE<X> = X extends true ? true : false;
// @ts-ignore
export type CheckExcludeTrue <X> = `${X}` extends 'true'  
	? ErrorArgument<X, 'any. But it does not make sense to enter only true'>
	: X;
