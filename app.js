// LOGICAL OPERATORS

let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2);
console.log(num1 > num2)
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1 = num3);
console.log(num1 === num3);
console.log(word1 === word2);
console.log(word1 != word2);

// CONTROL FLOW
let item = "Annpurna";
if (item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2") {
    console.log("Buy U2");
}
else if (item === "A1") {
    console.log("Buy A1");
} else{
    console.log("Buy Rocky Salt");
}

// GRADING SYSTEM
let score = 100;
if (score >= 0 && score <= 100) {
    if (score >= 90)
    console.log("Excellent");
} else if (score >=80){
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
} else if ( score >= 60) {
    console.log("Average");
} else if (score >=50){
    console.log("Credit")
} else if (score >= 40){
    console.log("Pass");
} else if(score>= 0){
    console.log("Fail");
}


// FUNCTION
function sum(s, t) {
    let total = s + t;
    return total;
}

let eleven = sum(5, 6);
let ten = sum(7, 3);
let fifteen = sum(10, 5);

function multiply(x, y = 2) {
    let total = x * y
    return total;
}
Bernice = multiply(2);
console.log(Bernice);

// LOOPS
// for loop
for(let i = 1; i <= 10;i++) {
    console.log(i);
}

for(let i =1; i <= 100;i++) {
    console.log(i +". Love Yourself Always");
}

// while loop
let num = 1;
while(num <= 10) {
    console.log(num);

    num = num + 1;
}

do while loop
let age = 1;
do{
    console.log( age + ".You can't vote");
    age = age + 1;
} while (age < 18);

let num = 2;
do{
    console.log(num + ".Come to mummy");
    num++;
} while (num < 20);

// Array methods
let scores = [20, 18, 25, 30, 35, 40, 45, 50];

for(let score of scores) {
    console.log(Math.pow(score, 2));
}

// filter
let marriage = scores.filter(abena => abena > 30);
console.log(marriage);

//map
let squares = scores.map((score) => score * score);
console.log(squares);

// find
let eighteen = scores.find((score) => score === 18);
console.log(eighteen);