"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spongebobCase = void 0;
const spongebobCase = (str) => {
    return str
        .split("")
        .map((letter, index) => {
        return index % 2 === 0 ? letter : letter.toUpperCase();
    })
        .join("");
};
exports.spongebobCase = spongebobCase;
