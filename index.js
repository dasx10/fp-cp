"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fp_cp_1 = __importDefault(require("./lib"));
try {
    console.log(fp_cp_1.default.queryJson(
      'http://localhost?user=john&user=levone&age=27&isMal&[]p=2'
    ));
}
catch (e) {
    console.log(e);
}
const a = fp_cp_1.default.map((e) => e)([1, 3, 4]);
console.log(a);
