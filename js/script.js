'use strict';

const arrObj = {
    a: `hello`,
    1: `what do you want?`
};
arrObj.b = `new value`;
arrObj[`c`] = `new value 1`;

console.log(arrObj.a);
console.log(arrObj[1]);
console.log(arrObj.b);
console.log(arrObj[`c`]);

//alert(`Ні. How are you?`);
//const result = confirm(`Hi. Are you here?`);
//console.log(result);

//const answer = prompt(`Are you 18 years old`,``);
//console.log(answer);

const answers = [];

answers[0] = prompt(`What is your name?`, ``);
answers[1] = prompt(`What is your surname?`, ``);
answers[2] = +prompt(`How old are you?`, ``);

console.log(answers);
document.write(answers);