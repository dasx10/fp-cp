import { ErrorArgument } from "../../../function/index.D";

export type IS_FALSE<X> = X extends false ? true : false;

// @ts-ignore
export type CheckExcludeFalse <X> = `${X}` extends 'false'  
	? ErrorArgument<X, 'any. But it does not make sense to enter only false'>
	: X;
