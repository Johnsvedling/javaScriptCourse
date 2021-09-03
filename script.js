
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let Jonas_matilda = 'JM';
let _function = 27;

// variable name conventions
let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'Teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer'
job = 'teacher'

lastName = 'schmedtmann';
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2018);



let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


/////
//Coding Challenge #1

// const weightMark = 78;
// const heightMark = 1.69;
// console.log(weightMark / heightMark ** 2);
// const weightJohn = 92;
// const heightJohn = 1.95;
// console.log(weightJohn / heightJohn ** 2);

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const BMImark = weightMark / heightMark ** 2;
const BMIjohn = weightJohn / heightJohn ** 2


const markHigherBMI = BMImark > BMIjohn;

console.log(BMImark, BMIjohn, markHigherBMI)


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string..`);

console.log('String with \n\
muliple \n\
lines');

console.log(`String
with
muiltiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//////
//Coding Challenge #2

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const BMImark = weightMark / heightMark ** 2;
const BMIjohn = weightJohn / heightJohn ** 2

console.log(BMImark, BMIjohn);

if (BMImark > BMIjohn) {
    console.log(`Mark's BMI(${BMImark}) is higher than John's!`)
} else {
    console.log(`John's BMI(${BMIjohn}) is higher than Mark's!`)
}


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// 0 zero is a falsy value, thats why it will choose the else statement. money contains the boolean. If i change money to any number than 0 it will become truthy and so the if statement will be chosen instead

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


// === is called strict equal because it is not able to do type coersion and thats the difference between it and the lose equal == that is able to do type coersion
const age = '18';
if (age === 18) console.log('You just became an adult(strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("what's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number!')
} else if (favourite === 9) {
    console.log('9 is also a cool number!')
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// && = AND || = OR ! = NOT
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}
*/

///////////
// CODING CHALLENGE #3

// const dolhpineTotalScore = 96 + 108 + 89;
// const koalasTotalScore = 88 + 91 + 110;

// const dolhpineAverageScore = dolhpineTotalScore / 3;
// const koalasAverageScore = koalasTotalScore / 3;

// if (dolhpineAverageScore > koalasAverageScore) {
//     console.log("Congratulations Dolhpine's!");
// } else if (dolhpineAverageScore < koalasAverageScore) {
//     console.log('Congratulations Koalas!');
// } else {
//     (dolhpineAverageScore === koalasAverageScore);
//     console.log("It's a tie!");
// }

// Bonus 1
const dolhpineAverageScore = (97 + 112 + 81) / 3;
const koalasAverageScore = (109 + 95 + 86) / 3;
console.log(dolhpineAverageScore, koalasAverageScore);

if (dolhpineAverageScore > koalasAverageScore && dolhpineAverageScore >= 100) {
    console.log("Congratulations Dolhpine's!");
} else if (dolhpineAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log('Congratulations Koalas!');
} else if (dolhpineAverageScore === koalasAverageScore && dolhpineAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log("It's a tie!");
} else {
    console.log('No one win!');
}




