const { texto } = require("./texto-base");

const regExp = /(maria)(, hoje sua esposa)/i;
const found = regExp.exec(texto);
console.log(found[0]);
