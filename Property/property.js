/* const pattern1 = /Hello world/g;
console.log(pattern1.constructor); */ // The constructor property return a regular expression's constructor function

/* const pattern2 = /Hello world/g;
console.log(pattern2.global); */ // check it  global or not

/* const pattern3 = /Hello world/gi;
console.log(pattern3.ignoreCase);  */ // check it  case ignore or not

//============= test ============================== test ========================test ==================== test ======//
/* const text2 = "the rain @in Spain stays mainly in the plain";
console.log(text.match(/[r,l]ain/gi));

const time = "4 aug 3pm";
console.log(time.match(/\d+(?=PM)/gi)); //check kore digit ase ki na */
//========================= multiline ===================================//
/* 
let text2 = "this is sagor my name is  sagor\nwe need more office now";
let pattern = /sagor/g; // "g" and "i" is set, "m" is not.
let result = pattern.multiline;
console.log(result); */

/* const text = "my name is sagor";
const pattern = /is/g;

while (pattern.test(text)) {
  console.log(pattern.lastIndex);
}
 */

//==================================== Source ====================================//
/* let text = "Visit W3Schools";
let pattern = /sagor/g;
let result = pattern.source; // partern e ki ki jinis caisi ta dekha zay
console.log(result); */
