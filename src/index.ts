import Array from "./array";
export { default as Array } from "./array";

const _ = Object.assign(function Placeholder () {
    
}, {
    [Symbol.iterator]: function* PlaceholderIterator () {
        yield void 0
    },
    Array,
    ...Array,
});

export default _;