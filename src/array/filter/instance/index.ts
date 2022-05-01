const _arrayFilterInstances = <Instances extends readonly (new (...args: any[]) => any)[], X extends readonly any[]>(instances: Instances, x: X) => {
	return x.filter((e) => instances.some((Instance => e instanceof Instance)));
}

export default _arrayFilterInstances;
