//Nullish coalescing operator '??'
//The nullish coalescing operator ?? provides a short syntax for selecting a first “defined” variable from the list.
//
//The result of a ?? b is:
//a if it’s not null or undefined,
//b, otherwise.

//We can rewrite result = a ?? b using the operators that we already know, like this:

result = (a !== null && a !== undefined) ? a : b;

let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = null;
alert(user ?? "Anonymous"); // Anonymous (user is null)

user = "John";
alert(user ?? "Anonymous"); // John (user is not null or undefined)

//For example, here we’ll use the first variable that is not null or undefined:

let firstName = null;
let lastName = null;
let nickName = "SuperCoder";
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder

//Comparison with OR '||'
//For example, in the code above we could replace ?? with || and still get the same result:

let firstName2 = null;
let lastName2 = null;
let nickName2 = "SuperCoder";
alert(firstName2 || lastName2 || nickName2 || "Anonymous"); // SuperCoder

//The important difference is that:
//|| returns the first truthy value.
//?? returns the first defined value.

//In other words, || doesn’t distinguish between false, 0, an empty string, null, undefined, and NaN. They are all “falsy” in the sense that they become false if we convert them to a boolean.

//The nullish coalescing operator ?? is a bit smarter and checks for both null and undefined.

//So, the code above works exactly as if ?? were replaced with || except that it returns the right-hand operand if the left one is null or undefined.

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

//The precedence of ?? is higher than that of ||, so if we’re looking for the first truthy value of a list of variables and expressions, we should use ||.

let height2 = null;
let width2 = null;

// important: use parentheses
let area = (height2 ?? 100) * (width2 ?? 50);

alert(area); // 5000

// without parentheses
let area2 = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
let area3 = height ?? (100 * width) ?? 50;

alert(area2); // 100
alert(area3); // 50

//The precedence of ?? is the same as that of =, so if we need to assign a value to a variable based on another variable, we can use ??=.

//let x = 1 && 2 ?? 3; // Syntax error
let x2 = (1 && 2) ?? 3; // Works

alert(x2); // 2