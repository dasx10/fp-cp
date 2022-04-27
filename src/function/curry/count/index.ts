import type { Index }                    from "../../../array/index.D";
import type { UINT }                     from "../../../number/index.D";
import type { ParametersConsistent }     from "../../index.D";
import type { NextConsistentParameters } from "../index.D";
import type { ReturnTypeCurryCount }     from './index.D';


type MinCount   <Count extends number> = Exclude<UINT<Count>, 0 | 1>;
type FixCount   <Def extends (...args: any[]) => any> = Exclude<Index<[any, ...Parameters<Def>]>, 0 | 1>;
type LimitCount <Count extends number, Def extends (...args: any[]) => any> = number extends Count 
? Count
: Def extends ((...args: [...infer Args]) => any) 
	? number extends Args['length']
		? Count
	: Count extends Index<[any, ...Args]>
		? Count
		: never
: Count;

type CurrentCount <Count extends number, Def extends (...args: any[]) => any> = number extends Count
	? number
	: LimitCount<MinCount<Count>, Def>


const curryCount = <
	Count extends number,
	Def   extends (...args: any[]) => any,
	Start extends ParametersConsistent<Def>
>(count: CurrentCount<Count, Def>, def: Def, ...start: Start): ReturnTypeCurryCount<Count, Def, Start> => count >= start.length 
	? def(...start)
	: <Next extends NextConsistentParameters<Def, Start>>(...next: Next) => curryCount(
			count, def, 
			// @ts-ignore
			...start, ...next
		);

export default curryCount;
