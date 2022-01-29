import { map } from "./array";

const _ = Object.assign(function Placeholder () {
    
}, {
    [Symbol.iterator]: function* PlaceholderIterator () {
        yield void 0
    },
    map
});

export default _;

Array.of