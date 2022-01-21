const averageBy = require("./array/averageBy");
const partition = require("./array/partition");
const where = require("./array/where");

const aa = where({ a: (e) => e > 10, b: (e) => e < 10 })

console.log(
    aa([{a: 1, b: 2}, {a: 11, b: 9 }, { a: 11, b: 11 }])
);