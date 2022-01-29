type Reverse<AnyTuple extends any[], Recursive extends any[] = []> =  ReturnType<AnyTuple extends [infer F, ...infer L] ? () => Reverse<L,[F,...Recursive]> : () => Recursive>
type FirstElement<Tuple extends any[]>  = Tuple extends [infer First, ...infer Next] ? First : never;
type LastElement<Tuple extends any[]> = FirstElement<Reverse<Tuple>>;
type AcceptNext <Executor extends (...args: any) => any> = (args: ReturnType<Executor>) => any;

declare type pipeFunction = <
	FirstFunction extends (...param: any[]) => any,
	NextFunctions extends [AcceptNext<FirstFunction>, ...((param: any) => any)[]],
	LastFunction extends (...args: any) => any
> (
	firstFunction: FirstFunction,
	...functions: (
		[AcceptNext<FirstFunction> & LastFunction] |
		[...NextFunctions, AcceptNext<LastElement<NextFunctions>> & LastFunction]
	)

) => (...args: [...Parameters<FirstFunction>]) => ReturnType<LastFunction>;