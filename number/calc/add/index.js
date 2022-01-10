function add (adder) {
    return function useAdd (number) {
        return number + adder;
    }
}

module.exports = add;