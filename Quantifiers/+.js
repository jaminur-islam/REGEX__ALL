/* const text = "Hellooooo World Hello W3Schoole";
console.log(text.match(/o+/g)); */ // ze letter diye + dibo seita ze koyta thakbe seikoyta return korbe

// const text = "Hellooooo World0 Hello W3Schoole";
// console.log(text.match(/lo*/g)); // za letter dibo tar sob e nibe (l) nibe (loo) ekta 0 thakleo take dorbe nah thakleo take dorbe  zoto gula thakok nibe

/* const text = "Hellooooo World Hello W3Schoole";
console.log(text.match(/lo?/g)); */ // ze letter dibo seita nibe r 0/o ekta kore nibe

/* const text2 = "ha-ha,haa-haa";
console.log(text2.match(/haa/g)); // ekhane ami bole ditechi be{3}r mane b er pore 3ta e thakle seita deo
const text = "ha-ha,haa-haa";
console.log(text.match(/\d{2,}/g)); // ekhane ami bole ditechi be{3}r mane b er pore 3ta e thakle seita deo
 */

/* const text2 = "Is th is all there is is is ";
console.log(text2.match(/is(?! all)/gi)); //i all er ase pashe nei emon is ke return kore
 */

const text2 = "https://domain.com/what-is-html https://domain.com/what-is-html";
console.log(text2.match(/^https/gm));

let text = "Is this all there is";
console.log(text.match(/is(?! all)/gi));
