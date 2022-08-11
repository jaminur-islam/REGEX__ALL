const text = "#2A2A2A";
const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;
const match = text.match(text);

const index = text.search(regex);

const replace = text.replace(regex, "#000000");

const texting = regex.test(text);
console.log(match[0], index, replace, texting, text);



const text = "+88-01912345678";
const regex = /(\+88)?-?01[1-9]\d{8}/g;
const match = text.match(regex);

const index = text.search(regex);

const replace = text.replace(regex, "#000000");

const texting = regex.test(text);
console.log(match[0], index, replace, texting, text);





















https://dev.to/emmabostian/regex-cheat-sheet-2j2a