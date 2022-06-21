const arrayLikeConcatCore = <Y extends ArrayLike<unknown>, X extends ArrayLike<unknown>>(y: Y, x: X) => {
	const yLength = y.length;
	const xLength = x.length;
	const concated = new Array(yLength + xLength);
	let index = 0;
	while (index < xLength) {
		concated[index] = x[index];
		index++;
	}
	index = 0;
	while (index < yLength) {
		concated[index + xLength] = y[index];
		index++;
	}
	return concated;
}

export default arrayLikeConcatCore;
