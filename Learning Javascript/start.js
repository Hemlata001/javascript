// for preventing too many error we use use strict string
"use strict";

console.log("Hello world"); // Hello world

// variable

var firstName  = "Himanshi";
console.log(firstName); // Himanshi

//Change the variable

firstName = "Hemlata";
console.log(firstName); // Hemlata

// Rules for naming Convention
// 1) you can't start with number
// Example- 
// 1value(Invalid)
// value1(valid)

var hemu  = "hema";
console.log(hemu); // hemu

// 2) you can use only underscore _ or dollar $ symbol.
// Example-
// first_name(valid)        ,  first$name(valid)
// _firstname(valid)        ,  $firstname(valid)

var first_name = 12;
console.log(first_name); // 12

var _firstname = 13;
console.log(_firstname); // 13

var first$name = 14;
console.log(first$name); // 14

var $firstname = 15;
console.log($firstname); // 15

// 3) you cannot use spaces
// first name(invalid)

// 4) Convention
// start with small letter and use CamelCase

var Secondname = "Singh"; // snake case writing
console.log(Secondname);

var SecondName  = "Kumari"; //camel case writing
console.log(SecondName);

// Let Keyword
//Declare variable with the let Keyword

let firstName = "Hem";
console.log(firstName); // Hem

// difference between var and let

var firstName  = "dolly";
var firstName = "hemu";
console.log(firstName); //  hemu 

let firstName  = "dolly";
let firstName = "hemu";
console.log(firstName); // SyntaxError: Identifier 'firstName' has already been declared

// Constant const keyword
const pi = 3.14;
console.log(pi); // 3.14

pi = 3.15;
console.log(pi); // TypeError: Assignment to constant variable.

//  String Indexing
let firstName  = "Himanshi";
// H  i  m  a  n  s  h  i
// 0  1  2  3  4  5  6  7
console.log(firstName[5]);  // s 

// for the length of string
console.log(firstName.length); // 8

// index count from 0 that's why it is 0 base indexing
// length count from 1 
// Last index = length - 1
console.log(firstName[firstName.length - 1]); // i
console.log(firstName[firstName.length - 2]); // h

// useful String method
let firstName = "  harshita ";
console.log(firstName.length);// 11
firstName.trim();//"harshita"(not print only create)
let newString = firstName.trim();
console.log(firstName.length);//11
console.log(newString.length);//8
console.log(newString);//harshita
console.log(firstName.toUpperCase());// HARSHITA 
console.log(firstName.toLowerCase());// harshita

let newStrng = newString.slice(0,4);
console.log(newStrng);//hars

// Types of Operators
/* data type(primitive data type)
string "harshita"
number 2,4,5,6
booleans
undefined
null
BigInt
Symbol */

let age = 20;
let firstName = "Hemu";
console.log(typeof age);//number
console.log(typeof firstName);//string

// convert number to string
age = 20;//number
console.log(typeof (age + " "));//string
// 20 -> "20"

// convert string to number
let myStr = "34";
console.log(typeof myStr);//String
myStr = +"34";
console.log(typeof myStr);//Number

let a = 19;
console.log(typeof a);//Number
a = String(a);
console.log(typeof a);//String
a = Number(a);
console.log(typeof a);//Number

// String Concatenation
let String1 = "Himanshi";
let String2 = "Singh";
let fullName  = String1 + " " + String2;
console.log(fullName);//Himanshi Singh

// Template String
let b = 17;
let c  = "H";
let d  = "I am " + " " + c +" and I am " + " " + b;
console.log(d);//I am  H and I am  17
let e = `I am ${c} and I am ${b}`;
console.log(e);//I am H and I am 17

 // undefined
 // null
 let firstName;
 console.log(typeof firstName);//undefined
 firstName = "himanshi";
 console.log(typeof firstName,firstName);//string himanshi

 let second = null;
 console.log(second);//null
 console.log(typeof null);//object 

 let myNumber = 123;
 console.log(myNumber);
 console.log(Number.MAX_SAFE_INTEGER);