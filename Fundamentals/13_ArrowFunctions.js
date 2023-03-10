//Arrow functions, the basics
//
//Arrow functions are handy for one-liners. They come in two flavors:
//
//Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
let sum1 = (a, b) => a + b;
alert(sum1(1, 2)); // 3

//With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
let sum2 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};
alert(sum2(1, 2)); // 3

//If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
let double = n => n * 2;
alert(double(3)); // 6

//If there are no arguments, parentheses will be empty (but they should be present):
let sayHi = () => alert("Hello!");
sayHi();

//Arrow functions can be used in the same way as Function Expressions.
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert("Greetings!");
welcome(); // ok now

//The task: rewrite with arrow functions
//Rewrite the function assigned to the variable f to be a shorter function with no curly braces and no return.
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

let f = ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

//Arrow functions have a “dynamic this”
//Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(
            student => alert(this.title + ': ' + student)
        );
    }
};
group.showList();
