const firstZero = (text) => {
  return text.match(/^0*/g)[0].length;
};
console.log(firstZero("000323400000"));

const lastZero = (text) => {
  return text.match(/0*$/g)[0].length;
};

console.log(lastZero("000323400000"));
