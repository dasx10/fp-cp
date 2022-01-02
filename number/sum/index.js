function sum (adder) {
    return function useSum (number) {
        return number + adder;
    }
}

module.exports = sum;