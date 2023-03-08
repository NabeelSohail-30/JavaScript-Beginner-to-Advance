//Math Operators
// + - * / %
// **

console.log('\nMath Operators')

let num1 = 10
let num2 = 20

console.log('num1: ', num1);
console.log('num2: ', num2);
console.log('num1 + num2: ', num1 + num2);
console.log('num1 - num2: ', num1 - num2);
console.log('num1 * num2: ', num1 * num2);
console.log('num1 / num2: ', num1 / num2);
console.log('num1 % num2: ', num1 % num2);
console.log('num1 ** num2: ', num1 ** num2);

//Increment and Decrement Operators
// ++ --
// ++num
// num++
// --num
// num--

console.log('\nIncrement and Decrement Operators')

let num3 = 10
let num4 = 20

console.log('num3: ', num3);
console.log('num4: ', num4)
console.log('num3++: ', num3++);
console.log('num3: ', num3);
console.log('++num3: ', ++num3);
console.log('num3: ', num3);
console.log('num4--: ', num4--);
console.log('num4: ', num4);
console.log('--num4: ', --num4);
console.log('num4: ', num4);

//Assignment Operators
// += -= *= /= %=
// **=

console.log('\nAssignment Operators')

let num5 = 10
let num6 = 20

console.log('num5: ', num5);
console.log('num6: ', num6);
num5 += num6
console.log('num5 += num6: ', num5);
num5 -= num6
console.log('num5 -= num6: ', num5);
num5 *= num6
console.log('num5 *= num6: ', num5);
num5 /= num6
console.log('num5 /= num6: ', num5);
num5 %= num6
console.log('num5 %= num6: ', num5);
num5 **= num6
console.log('num5 **= num6: ', num5);

//Chaining Assignment

console.log('\nChaining Assignment')
let a, b, c;
a = b = c = 2 + 2;
console.log('a: ', a);
console.log('b: ', b);
console.log('c: ', c);

//Comparison Operators
// == != > < >= <=
// === !==

console.log('\nComparison Operators')

let num7 = 10
let num8 = 20

console.log('num7: ', num7);
console.log('num8: ', num8);

console.log('num7 == num8: ', num7 == num8);
console.log('num7 != num8: ', num7 != num8);
console.log('num7 > num8: ', num7 > num8);
console.log('num7 < num8: ', num7 < num8);
console.log('num7 >= num8: ', num7 >= num8);
console.log('num7 <= num8: ', num7 <= num8);

console.log('num7 === num8: ', num7 === num8);
console.log('num7 !== num8: ', num7 !== num8);

//Logical Operators
// && || !

console.log('\nLogical Operators')

let num9 = 10
let num10 = 20

console.log('num9: ', num9);
console.log('num10: ', num10);

console.log('num9 > 5 && num10 > 5: ', num9 > 5 && num10 > 5);
console.log('num9 > 5 && num10 > 25: ', num9 > 5 && num10 > 25);
console.log('num9 > 25 && num10 > 5: ', num9 > 25 && num10 > 5);
console.log('num9 > 25 && num10 > 25: ', num9 > 25 && num10 > 25);

console.log('num9 > 5 || num10 > 5: ', num9 > 5 || num10 > 5);
console.log('num9 > 5 || num10 > 25: ', num9 > 5 || num10 > 25);
console.log('num9 > 25 || num10 > 5: ', num9 > 25 || num10 > 5);
console.log('num9 > 25 || num10 > 25: ', num9 > 25 || num10 > 25);

console.log('!(num9 > 5): ', !(num9 > 5));
console.log('!(num9 > 25): ', !(num9 > 25));

//Ternary Operator
// condition ? exprIfTrue : exprIfFalse

console.log('\nTernary Operator')

let num11 = 10
let num12 = 20

console.log('num11: ', num11);
console.log('num12: ', num12);

console.log('num11 > num12 ? num11 : num12: ', num11 > num12 ? num11 : num12);
console.log('num11 < num12 ? num11 : num12: ', num11 < num12 ? num11 : num12);

//Typeof Operator
// typeof

console.log('\nTypeof Operator')

let num13 = 10

console.log('num13: ', num13);

console.log('typeof num13: ', typeof num13);

//Operator Precedence
// ()

console.log('\nOperator Precedence')

let num14 = 10
let num15 = 20

console.log('num14: ', num14);
console.log('num15: ', num15);

console.log('num14 + num15 * 2: ', num14 + num15 * 2);
console.log('(num14 + num15) * 2: ', (num14 + num15) * 2);

//Operator Associativity

console.log('\nOperator Associativity')

let num16 = 10
let num17 = 20

console.log('num16: ', num16);
console.log('num17: ', num17);

console.log('num16 + num17 * 2: ', num16 + num17 * 2);
console.log('num16 + (num17 * 2): ', num16 + (num17 * 2));

//Operator Precedence Table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//String Concatination with +

console.log('\nString Concatination with +')

let str1 = 'Hello'
let str2 = 'World'

console.log('str1: ', str1);
console.log('str2: ', str2);

console.log('str1 + str2: ', str1 + str2);
console.log('1' + 2);
console.log(1 + '2');
console.log(1 + 2 + '3');

//String Concatination with +=
// +=

console.log('\nString Concatination with +=')

let str3 = 'Hello'
let str4 = 'World'

console.log('str3: ', str3);
console.log('str4: ', str4);

str3 += str4
console.log('str3 += str4: ', str3);

//Btwise Operators
// & | ^ ~ << >>

console.log('\nBtwise Operators')

let num18 = 10
let num19 = 20

console.log('num18: ', num18);
console.log('num19: ', num19);

console.log('num18 & num19: ', num18 & num19);
console.log('num18 | num19: ', num18 | num19);
console.log('num18 ^ num19: ', num18 ^ num19);
console.log('~num18: ', ~num18);
console.log('num18 << 1: ', num18 << 1);
console.log('num18 >> 1: ', num18 >> 1);


//String Comparison

console.log('\nString Comparison')

console.log('a' > 'b');
console.log('a' > 'A');
console.log('a' > 'B');
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true

//Comparison of Different Types
console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1
console.log(true == 1); // true
console.log(false == 0); // true
//A regular equality check == has a problem. It cannot differentiate 0 from false:
console.log(0 == false); // true
//The same thing happens with an empty string:
console.log('' == false); // true

//Strict Equality
// ===

console.log('\nStrict Equality')

console.log('1 === 1: ', 1 === 1);
console.log('1 === 2: ', 1 === 2);
console.log('1 === "1": ', 1 === "1");
console.log('1 === true: ', 1 === true);
console.log('0 === false: ', 0 === false);

//Comparison with null and undefined
// null == undefined true
// null === undefined false

console.log('\nComparison with null and undefined')

console.log('null == undefined: ', null == undefined);
console.log('null === undefined: ', null === undefined);
console.log(null === undefined);
console.log(null == undefined); // true

//Comparison with NaN
// NaN is a special numeric value which represents an error.
// NaN is sticky. Any further operation on NaN returns NaN:

console.log('\nComparison with NaN')

console.log('NaN === NaN: ', NaN === NaN);
console.log('NaN == NaN: ', NaN == NaN);
console.log('NaN > 5: ', NaN > 5);
console.log('NaN < 5: ', NaN < 5);
console.log('NaN == 5: ', NaN == 5);

//Strange result: null vs 0
//Let’s compare null with a zero:
console.log('\nStrange result: null vs 0');
console.log(null > 0);  // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

//An incomparable undefined
//The value undefined should only be compared with itself and other undefined:

console.log('\nAn incomparable undefined');
console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)