const limit = require("./array/limit");
const limitMutation = require("./array/limit/mutation");
const skip = require("./array/skip");
const sumByProperty = require("./array/sum/by/property");

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(limit(4)(a));
console.log(a)