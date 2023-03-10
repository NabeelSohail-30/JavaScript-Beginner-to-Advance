//JavaScript specials

//Code structure
//Statements are delimited with a semicolon:
alert('Hello'); alert('World');
//Usually, a line-break is also treated as a delimiter, so that would also work:
alert('Hello')
alert('World')

//That would not work:
// alert('Hello')
// [1, 2].forEach(alert)

//Usually, statements are written on separate lines to make the code more readable:
alert('Hello');
alert('World');

//Semicolons are not required after code blocks {...} and syntax constructs with them like loops:
// if (a > b) {
//     alert('Greater');
// }

// for (let i = 0; i < 5; i++) {
//     alert(i);
// }

//Strict mode
//To fully enable all features of modern JavaScript, we should start scripts with “use strict” directive.
//The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.
//“use strict” can be put at the start of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script.
//Strict mode is enabled by placing "use strict" at the top of a script or function. Several language features, like “classes” and “modules”, enable strict mode automatically.
//Strict mode is supported by all modern browsers.

//Variables
//There are two types of variables in JavaScript:
//1. let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
//2. var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var".
//3. const – is like let, but the value of the variable can’t be changed.

let x = 5;
x = "John";

/*There are 8 data types:

number for both floating-point and integer numbers,
bigint for integer numbers of arbitrary length,
string for strings,
boolean for logical values: true/false,
null – a type with a single value null, meaning “empty” or “does not exist”,
undefined – a type with a single value undefined, meaning “not assigned”,
object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.*/

//Typeof operator
//The typeof operator returns the type for a value, with two exceptions:
//null is returned as "object" – this is an error in the language, it’s not actually an object.
//The typeof operator is not a function. It is placed before the value, without parentheses.
//The call typeof x returns a string with the type name.
typeof null == "object" // error in the language
typeof function () { } == "function" // functions are treated specially

//Interaction
/*
We’re using a browser as a working environment, so basic UI functions will be:

prompt(question, [default])
Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
confirm(question)
Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.
alert(message)
Output a message.
All these functions are modal, they pause the code execution and prevent the visitor from interacting with the page until they answer.
*/

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert("Visitor: " + userName); // Alice
alert("Tea wanted: " + isTeaWanted); // true  

//Operators
//There are many operators in JavaScript. Every operator has a corresponding symbol or keyword.
//Arithmetic operators
//Assignment operators
//String operators
//Comparison operators
//Logical operators
//Conditional (ternary) operator
//Comma operator
//Unary operators
//Binary operators
//Operator precedence
//Operator associativity

//Loops
//The “while” loop
//The “do…while” loop
//The “for” loop
//The “for…of” loop
//The “break” directive
//The “continue” directive

//Conditions
//The “switch” construct
//The “if” statement
//The “if…else” statement
//The “if…else if…else” statement
//The “?…:” operator

//Functions
//Function Declaration
//Function Expression
//Arrow functions revisited
//Default values
//The “return” statement
//Function parameters
//Function expressions and arrows have no special “arguments” variable.
//Rest parameters “…"
//The “length” property
//Functions as values
//Callback functions
//Named Function Expression
//Function Declaration vs Function Expression
