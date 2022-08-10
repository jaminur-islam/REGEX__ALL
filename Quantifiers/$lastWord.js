const text2 = "https://domain.com/what-is-html";
console.log(text2.match(/html$/gm)); //sob gula word er last er word er moddhe html thakle dibe nah thakle null

const some = "product code $5";
console.log(some.match(/(?<= \$)\d/g));
