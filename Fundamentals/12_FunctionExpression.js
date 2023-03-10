//Function expressions
//Function expressions are very similar to and have almost the same syntax as function declarations. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. Function expressions are convenient when passing a function as an argument to another function. Consider the following example:

// Function expression
var square = function (number) { return number * number; };
var x = square(4) // x gets the value 16

//Function is a value
//In JavaScript, functions are just another kind of object. They can have properties and methods just like any other object. For example, a function can have a length property that returns the number of arguments expected by the function. The following example defines a function with two parameters and then displays the length property of the function:

function sayHi() {
    alert("Hello");
}

alert(sayHi); // shows the function code

alert(sayHi.length); // shows 0

//We can copy a function to another variable:

function sayHi() {   // (1) create
    alert("Hello");
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

//We could also have used a Function Expression to declare sayHi, in the first line:
let sayHi = function () { // (1) create
    alert("Hello");
};

let func2 = sayHi;

//Why is there a semicolon at the end?
//You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not:
/*The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.*/

//Callback functions
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

//For example, the following code uses the setTimeout function to call the sayHi function after one second:

function sayHi() {
    alert("Hello");
}

setTimeout(sayHi, 1000);

//Another Example:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//The arguments showOk and showCancel of ask are called callback functions or just callbacks.
//The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

//We can use Function Expressions to write an equivalent, shorter function:

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);

//Difference between Function Declaration and Expression
// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sum = function (a, b) {
    return a + b;
};

//The Function Declaration (function sum(...) {...}) is usable in the whole script/code block.

//The Function Expression is created when the execution reaches it and is usable only from that moment.

//A Function Expression is created when the execution reaches it and is usable only from that moment.

//A Function Declaration can be called earlier than it is defined.

