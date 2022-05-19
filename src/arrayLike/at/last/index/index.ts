const arrayLikeAtLastIndex = <X extends ArrayLike<any>>({ length }: X): number | void => {
	if (length > 0) return length - 1;
}

export default arrayLikeAtLastIndex;
