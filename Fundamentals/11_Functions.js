//Function Declaration
function showMessage() {
    alert('Hello everyone!');
}

showMessage();

/*-------------------------------------------------------------*/

//Local Variables
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function

/*-------------------------------------------------------------*/

//Outer Variables
let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
}

showMessage(); // Hello, John

//The function has full access to the outer variable. It can modify it as well.
let userName2 = 'John';

function showMessage2() {
    userName2 = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName2;
    alert(message);
}

alert(userName2); // John before the function call

showMessage2();

alert(userName2); // Bob, the value was modified by the function

//If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
let userName3 = 'John';

function showMessage3() {
    let userName3 = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName3; // Bob
    alert(message);
}

// the function will create and use its own userName
showMessage3();

alert(userName3); // John, unchanged, the function did not access the outer variable

/*-------------------------------------------------------------*/

//Parameters
function showMessage(from, text) { // arguments: from, text
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

function showMessage4(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    alert(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann

/*-------------------------------------------------------------*/

//Default Values
function showMessage5(from, text = "no text given") {
    alert(from + ": " + text);
}

showMessage5("Ann"); // Ann: no text given
showMessage("Ann", undefined); // Ann: no text given

//If a parameter is declared as having a default value, it’s not necessary to pass it in the function call. In this case, the default value is used instead.
function showMessage6(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
}

/*-------------------------------------------------------------*/

//Return Value
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result); // 3


function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}

//The function returns the result of the prompt or the boolean true/false, that’s all. There’s no need to write return undefined after it, because it happens by default.
function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    alert("Showing you the movie"); // (*)
    // ...
}

showMovie(12)

/*-------------------------------------------------------------*/

//A function with an empty return or without it returns undefined
function doNothing() { /* empty */ }
alert(doNothing() === undefined); // true

//An empty return is also the same as return undefined:
function doNothing2() {
    return;
}
alert(doNothing2() === undefined); // true

//Never add a newline between return and the value
/* return
(some + long + expression + or + whatever * f(a) + f(b)) */
//That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:
/* return;
(some + long + expression + or + whatever * f(a) + f(b)) */
//So, it effectively returns undefined. That may become a source of bugs.

// at least put the opening parentheses there as follows:
return (
    some + long + expression + or + whatever
    * f(a) + f(b)
);

/*-------------------------------------------------------------*/

//Naming a Function
//Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does. There’s one exception: functions that start with “show” usually show something.
//Examples of good names:
/* showMessage(..)
getAge(..)
calcSum(..)
createForm(..)
checkPermission(..) */

//Examples of bad names:
/* a() // What does the function do? Is it supposed to be one-time or reusable? Is it related to the object or independent?
show(..) // The action is unknown. No parameters. What should it show?
get(..) // The action is unknown. No parameters. What should it get?
doSomething(..) // The action is unknown. No parameters. What should it do? */


/*-------------------------------------------------------------*/

//One function – one action
//A function should do exactly what is suggested by its name, no more.
//For instance, a function called showPrimes(n) should show only prime numbers. It should not do anything else. A good variant would be to return an array of primes, and then show them wherever needed. A bad variant would be to display them right inside that function using alert, because the function would not be reusable anywhere else.
//A function should be as short as possible. Ideally, only one or two actions. If it’s longer, then it probably does more than one thing. Splitting it up into several functions is a good thing.
//A function should only be created when we feel that we can reuse a certain piece of code several times in the future.
//A function should be created after we’ve already written the code that uses it. That way, we can be sure that it fits well and works as intended.
//A function should be created after we’ve already got a good understanding of what the code does. That way, we can name it right and make it as clean and easy-to-use as possible.


/*-------------------------------------------------------------*/

//Functions == Comments
//Functions should be short. Really short. If they are long, then it’s an indicator that they do more than one thing. Such functions are hard to understand and maintain.
//If we have a piece of code that we’d like to comment, then it’s a good sign that we can actually extract it into a function, like this:
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i); // a prime
    }
}

//The second variant uses an additional function isPrime(n) to test for primality:
function showPrimes2(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i); // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

/*-------------------------------------------------------------*/

