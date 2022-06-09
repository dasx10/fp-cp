const arrayFitCore = ((minimumLength: number, x: any[]) => {
	if (x.length < minimumLength) return Array.from({ length: minimumLength }, (value, index) => x[index]);
	return x;
});

export default arrayFitCore;
