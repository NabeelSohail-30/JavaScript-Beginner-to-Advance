//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

//Logical OR
//The logical OR operator || returns true if either of the operands is true. Otherwise, it returns false.

//For instance:

console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

//If an operand is not a boolean, it’s converted to a boolean for the evaluation.

//For instance, the number 1 is treated as true, the number 0 as false:

console.log(1 || 0); // 1 (1 is true)
console.log(true || 'no matter what'); // (true is the first truthy value)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

let hour = 9;

if (hour < 10 || hour > 18) {
    console.log('The office is closed.');
}

//We can pass more conditions:

let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour2 > 18 || isWeekend) {
    console.log('The office is closed.'); // it is the weekend
}

//Getting the first truthy value from a list of variables or expressions.

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder

//Short-circuit evaluation.

true || alert("not printed");
false || alert("printed");

//Logical AND
//The AND operator is represented with two ampersands &&.
//In classical programming, AND returns true if both operands are truthy and false otherwise:

alert(true && true);   // true
alert(false && true);  // false
alert(true && false);  // false
alert(false && false); // false

let hours2 = 12
let minutes = 30;

if (hours2 == 12 && minutes == 30) {
    console.log('The time is 12:30');
}

if (1 && 0) { // evaluated as true && false
    alert("won't work, because the result is falsy");
}

//AND “&&” finds the first falsy value
// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

alert(1 && 2 && null && 3); // null
alert(1 && 2 && 3); // 3, the last one

//Precedence of AND && is higher than OR ||
//So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
//So if an AND && is evaluated first, the OR || doesn’t have a chance to kick in:
alert(null || 2 && 3 || 4); // 3

//Don’t replace if with || or &&

let x = 1;

(x > 0) && alert('Greater than zero!');

//The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.

//Logical Not
//The NOT operator is represented with an exclamation sign !.
//The operator accepts a single argument and does the following:
//Converts the operand to boolean type: true/false.
//Returns the inverse value.

alert(!true); // false
alert(!0); // true

alert(!!"non-empty string"); // true
alert(!!null); // false

//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

