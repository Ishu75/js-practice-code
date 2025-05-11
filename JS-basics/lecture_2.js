// ---------------DataTypes------------------


// Best way of writing code to improve readability
console.log("In javascript you can write code like this too"); console.log
("But it is not recommended as a good practice for readability");

console.log("For good practice write code like this");
console.log("and add semicolon after every line to show the end");

// datatypes
let name = "Ishu"; // String
let age = 21; // Number
let isLoggedIn = false; // Boolean
let state = null; // Null

/* 
    number => 2 to power 53
    bigint
    string => ""
    boolean => true/false
    undefined => 
    null => standalone value and datatype too
    symbol => very important for identification and used for uniqueness (Mainly used with React.js)
    object
*/

console.table([name, age, isLoggedIn, state]);

console.log(typeof(name));
console.log(typeof undefined);
console.log(typeof null);  // This give type object


// For documentation mdn and tc39