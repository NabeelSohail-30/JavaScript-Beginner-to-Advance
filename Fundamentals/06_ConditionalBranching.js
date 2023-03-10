//The if Statement
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) console.log('You are right!');

if (year == 2015) {
    console.log("That's correct!");
    console.log("You're so smart!");
}

if (0) { // 0 is falsy
    console.log("Won't work, because the condition evaluates to false")
}

if (1) { // 1 is truthy
    console.log("Works, because the condition evaluates to true")
}

let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
    console.log("Condition is true");
}

//The else Clause

let num = prompt('Enter a Number:');

if (num % 2 == 0) {
    console.log('Number is Even');
}
else {
    console.log('Number is Odd');
}

//The else if Clause

let num2 = prompt('Enter a Number:');
if (num2 % 2 == 0) {
    console.log('Number is Even');
}
else if (num2 % 3 == 0) {
    console.log('Number is Odd and Divisible by 3');
}
else {
    console.log('Number is Odd');
}

//The ternary operator
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

console.log(accessAllowed);

//The above code can be written as:
let accessAllowed2 = (age > 18) ? true : false;

console.log(accessAllowed2);

//The above code can be written as:
let accessAllowed3 = age > 18;

console.log(accessAllowed3);

//Multiple ?
let age2 = prompt('age2?', 18);

let message = (age2 < 3) ? 'Hi, baby!' :
    (age2 < 18) ? 'Hello!' :
        (age2 < 100) ? 'Greetings!' :
            'What an unusual age!';
console.log(message);

//the above code using else-if
let age3 = prompt('age3?', 18);

let message2;
if (age3 < 3) {
    message2 = 'Hi, baby!';
}
else if (age3 < 18) {
    message2 = 'Hello!';
}
else if (age3 < 100) {
    message2 = 'Greetings!';
}
else {
    message2 = 'What an unusual age!';
}

console.log(message2);

//Non Traditional use of ?
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
    console.log('Right!') : console.log('Wrong.');

//same code written in if
if (company == 'Netscape') {
    console.log('Right!');
}
else {
    console.log('Wrong.');
}