//The While Loop
//The while loop is a loop that will continue to run as long as the condition is true.
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log(i);
    i++;
}

//For instance, a shorter way to write while (i != 0) is while (i):
let i2 = 3;
while (i2) { // when i becomes 0, the condition becomes falsy, and the loop stops
    console.log(i2);
    i2--;
}

//The “do…while” Loop
//The do…while loop is similar to while: it also repeats until a condition is falsy. But there are two important differences:
//1. The body of do…while executes at least once.
//2. The condition check happens after the body.
let i3 = 0;
do {
    console.log(i3);
    i3++;
}
while (i3 < 3);

//The “for” Loop
//The for loop is the most commonly used loop. It looks like this:
for (begin; condition; step) {
    // ... loop body ...
}
//The loop starts when begin executes. It then evaluates condition. If it’s falsy, the loop stops. Otherwise, it executes the body and then runs step. At the end of step, the condition is evaluated again, and if it’s still truthy, the loop restarts (begins again), so the body runs again.
//After the body finishes, the step runs, and then the condition is checked again. And so on.
//For example, the loop below outputs i while i < 3:
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
}

//Any part of for can be skipped.

//For example, the same loop without begin and step can be written like this:
let i4 = 0;
for (; i4 < 3;) {
    console.log(i4);
    i4++;
}

//We can also remove the step part:
let i5 = 0;
for (; i5 < 3;) {
    console.log(i5);
    i5++;
}

//We can actually remove everything, creating an infinite loop:

//for (;;) {
//    console.log(i);
//    i++;
//}

//The “break” Keyword
//The break keyword in JavaScript is used to terminate the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}
alert('Sum: ' + sum);

//The “continue” Keyword
//The continue keyword can be used to skip the current iteration.
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    console.log(i); // 1, then 3, 5, 7, 9
}

//The continue directive helps decrease nesting
//The continue directive can be used instead of the else clause. For example, the code below uses continue to output only odd values:
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) {   //skips the even values
        continue;
    }

    console.log(i); // 1, then 3, 5, 7, 9, only prints odd valus
}

//No break/continue to the right side of ‘?’
//(i > 5) ? alert(i) : continue; // continue isn't allowed here

//Labels for Break and Continue
//Sometimes we need to break out from multiple nested loops at once.
//For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (3,3):
//The call to prompt returns the user-entered value or cancels the input, by hitting Esc or Cancel. If the input is canceled, then we want to break out from both loops.
//There’s no way to do that right now. But using labels, we can label the loops and then break out from them using an additional break or continue.
//For example, here we break out from labeledLoop at once:

/* labelName: for (...) {
    ...
} */

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // what if we want to exit from here to Done (below)?
    }
}

alert('Done!');

//Here we use the label name to break out from it:
labelName: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break labelName; // (*)

        // do something with the value...
    }
}

alert('Done!');

//For Each Loop
//The for..of loop is a special form of the for loop, which is designed to work with iterables.
//The syntax is:
for (let value of iterable) {
    // ...
}
//The for..of loop has several special features.
//It calls a method named Symbol.iterator on the iterable object, asking it to return an iterator.
//Then it uses the iterator to iterate over the iterable object, running the loop body for each value.
//The result of the Symbol.iterator method is expected to be an object that provides a method named next(), which returns an object with two properties:
//1. value: the next value, undefined if the iteration is finished.

//2. done: true if the iteration is finished, otherwise false.

//The for..of loop iterates over the values returned by the iterator, stopping when done: true is returned.
//The for..of loop is a modern alternative to the older for..in loop, which iterates over property keys of an object.
//The for..of loop iterates over the values of an iterable object, not over its properties.

let students = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null
};

for (let key in students) {
    // keys
    console.log(key);  // name, age, isAdmin
    // values for the keys
    console.log(students[key]); // John, 30, true
}

