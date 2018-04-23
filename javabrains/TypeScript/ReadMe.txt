*****TypeScript Basics*****

***Introduction and setting Up***

TypeScript => javascript + types
TypeScript is supeset of javascript

TypeScript need nodeJs to compile from TypeScript to Javascript and run Javascript code in browser.

***Basic Features and Types***

tuple

var myArr: [number, string]
gives the flexiblity to declair array as per in javascript

function (a, b, c?) { }
? indicate an optional argument. otional argument should be at end

function (a, b, c = 0) { }
c is still optional but with default value

implicit typing: van we declare a variable and assign a value. typescript make the variable of type of value.

var a: number | boolean;
creating a union of number and boolean. | is union


