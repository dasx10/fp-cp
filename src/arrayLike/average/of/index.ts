const arrayLikeAverageOf = (x: ArrayLike<number>): number => {
	const { length } = x;
	switch (length) {
		case 0  : return 0;
		case 1  : return x[0];
		default : {
			let sum   = x[0];
			let index = 1;
			while (index < length) {
				sum += x[index];
				index++;
			}
			return sum / length;
		}
	}
}

export default arrayLikeAverageOf;
