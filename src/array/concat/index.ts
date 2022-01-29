function concat (...arrays: any[][]) {
    return function useConcat (array: any[]) {
        return array.concat(...arrays);
    }
}

export default concat;