var glass = 'Water';
console.log(glass);

// Declaration type -> 3
// var, let, const

// Primitive Data Type - (Immutable)
let anotherGlass = 'Water'; // String
let age = 45; // Number - Integer
let money = 45.45; // Number - Float
let isActive = true; // Boolean
let nullValue = null;
let undefinedValue = undefined;

age = 78;
console.log(age);

// Object Type - (Mutable)
let human = {
	leg: 2,
	hand: 2,
	eye: 2,
};

let chair = {
	leg: 4,
	color: 'red',
	haveWheels: false,
};

// Best Practice
let bookShelf = ['ABC', 'DEF', 'GHI'];
let bundleMoney = [15, 78, 98];

// Bad Practice
let randoms = [10, 'abc', 10];

let userName;
userName = 'Rasel';
// Let vs Const
const PI = 3.1416;
console.log(PI);
console.log(userName);

let name4;
// let 4name;
let _name;

// Snake Case
let user_name;

// Camel Case
let schoolName = 'ABC';
// let SchoolName = 'DEF';

// Pascal Case
let VillageName;

console.log(schoolName);
// console.log(SchoolName);
