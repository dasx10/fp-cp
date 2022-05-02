import { ErrorArgument } from "../../../function/index.D";

export type IS_BOOLEAN <X> = X extends boolean ? true : false;
// @ts-ignore
export type CheckExcludeBoolean <X> = `${X}` extends ('true' | 'false')  
	? ErrorArgument<X, 'any. But it does not make sense to enter only boolean'>
	: X;
