function pushMutation (...elements) {
    return function usePushMutation (array) {
        array.push(...elements);
        return array;
    }
}

module.exports = pushMutation;