const size = <X extends ArrayLike<any>>(x: X): X['length'] => x.length;
export default size;
