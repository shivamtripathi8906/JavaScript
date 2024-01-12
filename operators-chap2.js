var x = 200; // x is a variable and 200 is a value
var y = 100; // y is a variable and 100 is a value


console.log(x + y); // + is a arithmetic operator 
// that adds the value of x and y

console.log(y - x); // - is a arithmetic operator
// that subtracts the value of x from y

console.log(x * y); // * is a arithmetic operator
// It is represented using an asterisk
// and it multiplies the value of x and y

console.log(x / y); // / is a arithmetic operator
// It gives out the quotient of x and y

console.log(x % y); // % is a arithmetic operator
// It is called the modulus operator
// It gives out the remainder of x and y  ceil and floor for rounding off
console.log(3%2); // 1





//Prefix and postfix operators


var x = 100;
console.log(x + 1); // + operator to add 2 numbers

var y = x + 1; // 100 + 1
// first assigning the value of x + 1 to y
console.log(y);
// and then printing the value of y

var z = ++x;
// ++x is a prefix operator
// It is same as x = x + 1
// We call it as prefix operator because
// it is placed before the variable name
// It is only used as a shorthand for x = x + 1
console.log(z);


var zz = --x;
// --x is a prefix operator
// It is same as x = x - 1
console.log(zz);


var x = 100;

var z = x++;
// x++ is a shorthand for x = x + 1
// It first assigns the value of x to z
// then increments the value of x by 1
/**
 * The above code is same as:
 * var old = x;
 * x = x + 1;
 * console.log(x);
 * console.log(old);
 */
console.log(x);
console.log(z);




//Comparison Operator
var x = 100;
var y = 200;
/**
 * The comparison operators are used to compare two values.
 * and return true or false depending on the result.
 * Boolean : true or false
 */
console.log(x > y); // false
console.log(x < y); // true
console.log(x == y); // false
console.log(3 == 3); // true
console.log(4 > 4); // false
console.log(4 >= 4); // true
// >= is read as greater than or equal to
console.log(100 >= 4); // true
console.log(100 <= 4); // false
console.log(4 <= 4); // true

console.log(4 != 4); // false
// != is read as not equal to
// ! is read as not
console.log(3 != 4); // true

console.log("shiv"=="shiv");
console.log(false && false + "97")

//Logical Operators

var isSnowing = true;
var haveTrekkingShoes = false;

var haveWaterBottle = true;
var havePowerbank = false;

var canGoOnTrek = isSnowing && haveTrekkingShoes;
var cannotGoOnTrek = !canGoOnTrek;
var carryingOptionals = haveWaterBottle || havePowerbank;

console.log(canGoOnTrek);
console.log(cannotGoOnTrek);
console.log(carryingOptionals);