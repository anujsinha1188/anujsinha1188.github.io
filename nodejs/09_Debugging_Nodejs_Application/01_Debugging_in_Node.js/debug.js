console.log("Node Program");
var x = 7;
debugger; //break point
console.log("Test debugger in Node");
x = x + 14;
debugger; //break point
console.log("Hello, this is the final value of x:" + x);

/*
Built-in Debugger:
node inspect debug.js

V8 Inspector
node --inspect-brk debug.js
*/