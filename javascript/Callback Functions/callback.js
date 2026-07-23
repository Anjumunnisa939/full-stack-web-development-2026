// // ======================================================
// // JAVASCRIPT FUNCTIONS - COMPLETE NOTES
// // ======================================================

// const { CLIENT_RENEG_LIMIT } = require("node:tls");


// // ======================================================
// // 1. FUNCTION DECLARATION
// // ======================================================

// // A normal function.
// // Can be called before it is declared.

// function greet() {
//     console.log("Hello!");
// }

// greet();


// // ======================================================
// // 2. FUNCTION WITH PARAMETERS
// // ======================================================

// // Parameters receive values from the function call.

// function add(a, b) {
//     console.log(a + b);
// }

// add(10, 20);


// // ======================================================
// // 3. FUNCTION RETURN VALUE
// // ======================================================

// // return sends a value back to where the function was called.

// function multiply(a, b) {
//     return a * b;
// }

// answer = multiply(5, 4);

// console.log(answer);


// // ======================================================
// // 4. FUNCTION EXPRESSION
// // ======================================================

// // Function stored inside a variable.

// const greeting = function () {
//     console.log("Hello from Function Expression");
// };

// greeting();


// // ======================================================
// // 5. ARROW FUNCTION
// // ======================================================

// // Shorter syntax.

// const welcome = () => {
//     console.log("Hello from Arrow Function");
// };

// welcome();


// // ======================================================
// // 6. ARROW FUNCTION WITH PARAMETERS
// // ======================================================

// const square = (number) => {
//     return number * number;
// };

// console.log(square(5));


// // ======================================================
// // 7. SHORT ARROW FUNCTION
// // ======================================================

// // If there is only one statement,
// // return is automatic.

// const cube = number => number * number * number;

// console.log(cube(3));


// // ======================================================
// // 8. CALLBACK FUNCTION
// // ======================================================

// // A function passed into another function.

// function display(callback) {
//     console.log("Before callback");

//     callback();

//     console.log("After callback");
// }

// display(function () {
//     console.log("I am Callback");
// });


// // ======================================================
// // 9. HIGHER ORDER FUNCTION
// // ======================================================

// // A function that accepts another function.

// function run(fun) {
//     fun();
// }

// run(() => {
//     console.log("Higher Order Function");
// });


// // ======================================================
// // 10. setTimeout()
// // ======================================================

// // Runs ONLY ONCE after the given time.

// setTimeout(() => {
//     console.log("Executed after 2 seconds");
// }, 2000);


// // ======================================================
// // 11. setInterval()
// // ======================================================

// // Runs repeatedly.

// const intervalId = setInterval(() => {
//     console.log("Running every 1 second");
// }, 1000);


// // Stop after 5 seconds.

// setTimeout(() => {
//     clearInterval(intervalId);

//     console.log("Interval Stopped");
// }, 5000);


// // ======================================================
// // 12. forEach()
// // ======================================================

// // Loops through every element.

// let numbers = [10, 20, 30];

// numbers.forEach((value, index) => {

//     console.log(value);

//     console.log(index);

// });


// // ======================================================
// // 13. map()
// // ======================================================

// // Creates a NEW ARRAY.
// // Changes every element.

// let doubled = numbers.map((value) => {

//     return value * 2;

// });

// console.log(doubled);


// // ======================================================
// // 14. filter()
// // ======================================================

// // Creates a NEW ARRAY.
// // Keeps only elements that return true.

// let positive = [1, -3, 5, -7];

// let result =positive.filter((value) => {

//     return value > 0;

// });

// console.log(result);


// // ======================================================
// // 15. reduce()
// // ======================================================

// // Reduces the array into ONE VALUE.

// arr = [1, 2, 3, 4];

// let sum = arr.reduce((total, value) => {

//     return total + value;

// }, 0);

// console.log(sum);


// // ======================================================
// // 16. find()
// // ======================================================

// // Returns FIRST matching value.

// let values = [5, 8, 12, 20];

// let found = values.find((value) => {

//     return value > 10;

// });

// console.log(found);


// // ======================================================
// // 17. some()
// // ======================================================

// // Returns true if ANY element matches.

// console.log(

//     values.some((value) => {

//         return value > 15;

//     })

// );


// // ======================================================
// // 18. every()
// // ======================================================

// // Returns true if EVERY element matches.

// console.log(

//     values.every((value) => {

//         return value > 0;

//     })

// );


// // ======================================================
// // 19. addEventListener()
// // ======================================================

// // Used to attach an event to an element.

// // HTML:

// // const button=document.createElement('button')
// // button.textContent='click';
// // button.className='btn';
// // document.body.appendChild(button)
// // console.log(button,document.body)
// // button.addEventListener('click',()=>{
// //  console.log("Button clicked")
// // })




// // ======================================================
// // 20. removeEventListener()
// // ======================================================

// const clickFunction = () => {

//     console.log("Clicked");

// };

// // Add event

// button.addEventListener("click", clickFunction);

// // Remove event

// button.removeEventListener("click", clickFunction);


// // ======================================================
// // SUMMARY
// // ======================================================

// /*

// Function Declaration
// --------------------
// function greet(){}

// Function Expression
// --------------------
// const greet = function(){}

// Arrow Function
// --------------------
// const greet = ()=>{}

// Callback Function
// --------------------
// run(()=>{})

// Higher Order Function
// --------------------
// function run(callback){}

// setTimeout()
// --------------------
// Runs once.

// setInterval()
// --------------------
// Runs repeatedly.

// forEach()
// --------------------
// Loop through array.

// map()
// --------------------
// Create a NEW array by changing every element.

// filter()
// --------------------
// Create a NEW array with only matching elements.

// reduce()
// --------------------
// Convert an array into one value.

// find()
// --------------------
// Return first matching element.

// some()
// --------------------
// Returns true if at least one element matches.

// every()
// --------------------
// Returns true if all elements match.

// addEventListener()
// --------------------
// Attach an event.

// removeEventListener()
// --------------------
// Remove an event.

// */
//unshift() → Add to the beginning
arr = [2, 3];
arr.unshift(1);

console.log(arr);
//pop() → Remove the last element
arr = [1, 2, 3];

arr.pop();

console.log(arr);
//shift() → Remove the first element
arr = [1, 2, 3];

arr.shift();

console.log(arr);
//splice() → Remove, replace, or insert elements
arr = [10, 20, 30];

arr.splice(1, 1);

console.log(arr);
//Loop through an array=>Purpose: Perform an action for every element.
arr = [1, 2, 3];

arr.forEach((value) => {
    console.log(value);
});
//Create a modified array
//map()Purpose: Transform every element.
arr = [1, 2, 3];

result =arr.map((value) => {
    return value * 2;
});

console.log(result);
//Purpose: Keep only elements that satisfy a condition. filter()
arr = [1, -3, 5];

result =arr.filter((value) => {
    return value > 0;
});

console.log(result);
//. Find one element
//find()
//Purpose: Return the first matching element.
arr = [10, 20, 30];

result =arr.find((value) => {
    return value > 15;
});

console.log(result);
//Check if an element exists
//includes()
arr = ['apple', 'banana'];

console.log(arr.includes('banana'));
//. Find an element's position
//indexOf()

arr = ['a', 'b', 'c'];

console.log(arr.indexOf('b'));
//Combine arrays
 let a = [1, 2];
 let b = [3, 4];

console.log(a.concat(b));
//Convert an array to a string
//join()
arr = ['HTML', 'CSS', 'JS'];

console.log(arr.join('-'));
//Reverse an array
//reverse()
arr = [1, 2, 3];

arr.reverse();

console.log(arr);
// Sort an array
// sort()
arr = [5, 2, 8];

arr.sort((a, b) => a - b);

console.log(arr);
// 13. Reduce an array to one value
// reduce()
arr = [1, 2, 3, 4];

sum = arr.reduce((total, value) => {
    return total + value;
}, 0);

console.log(sum);
// Check a condition
// some()
arr = [1, 2, 3];

console.log(arr.some(value => value > 2));
//Purpose: Returns true only if every element matches the condition.every()
arr = [2, 4, 6];

console.log(arr.every(value => value % 2 === 0));
// ======================================================
// JAVASCRIPT FUNCTIONS - NODE.JS COMPLETE NOTES
// ======================================================


// ======================================================
// 1. FUNCTION DECLARATION
// ======================================================

function greet() {
    console.log("Hello!");
}

greet();


// ======================================================
// 2. FUNCTION WITH PARAMETERS
// ======================================================

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// ======================================================
// 3. FUNCTION RETURN VALUE
// ======================================================

function multiply(a, b) {
    return a * b;
}

answer = multiply(5, 4);

console.log(answer);


// ======================================================
// 4. FUNCTION EXPRESSION
// ======================================================

const greeting = function () {
    console.log("Hello from Function Expression");
};

greeting();


// ======================================================
// 5. ARROW FUNCTION
// ======================================================

const welcome = () => {
    console.log("Hello from Arrow Function");
};

welcome();


// ======================================================
// 6. ARROW FUNCTION WITH PARAMETERS
// ======================================================

const square = (number) => {
    return number * number;
};

console.log(square(5));


// ======================================================
// 7. SHORT ARROW FUNCTION
// ======================================================

const cube = number => number * number * number;

console.log(cube(3));


// ======================================================
// 8. CALLBACK FUNCTION
// ======================================================

function display(callback) {

    console.log("Before callback");

    callback();

    console.log("After callback");
}


display(function () {

    console.log("I am Callback");

});


// ======================================================
// 9. HIGHER ORDER FUNCTION
// ======================================================

function run(fun) {

    fun();

}


run(() => {

    console.log("Higher Order Function");

});


// ======================================================
// 10. setTimeout()
// ======================================================

setTimeout(() => {

    console.log("Executed after 2 seconds");

}, 2000);



// ======================================================
// 11. setInterval()
// ======================================================

const intervalId = setInterval(() => {

    console.log("Running every 1 second");

}, 1000);



setTimeout(() => {

    clearInterval(intervalId);

    console.log("Interval Stopped");

}, 5000);



// ======================================================
// 12. forEach()
// ======================================================

let numbers = [10,20,30];


numbers.forEach((value,index)=>{

    console.log("Value:",value);

    console.log("Index:",index);

});



// ======================================================
// 13. map()
// ======================================================

let doubled = numbers.map((value)=>{

    return value * 2;

});


console.log(doubled);



// ======================================================
// 14. filter()
// ======================================================


let positive = [1,-3,5,-7];


let result = positive.filter((value)=>{

    return value > 0;

});


console.log(result);



// ======================================================
// 15. reduce()
// ======================================================


arr = [1,2,3,4];


let sum = arr.reduce((total,value)=>{

    return total + value;

},0);


console.log(sum);



// ======================================================
// 16. find()
// ======================================================


let values = [5,8,12,20];


let found = values.find((value)=>{

    return value > 10;

});


console.log(found);



// ======================================================
// 17. some()
// ======================================================


console.log(

values.some((value)=>{

    return value > 15;

})

);



// ======================================================
// 18. every()
// ======================================================


console.log(

values.every((value)=>{

    return value > 0;

})

);



// ======================================================
// ARRAY METHODS
// ======================================================


// unshift()

arr = [2,3];

arr.unshift(1);

console.log(arr);



// pop()

arr = [1,2,3];

arr.pop();

console.log(arr);



// shift()

arr = [1,2,3];

arr.shift();

console.log(arr);



// splice()

arr = [10,20,30];

arr.splice(1,1);

console.log(arr);



// includes()

arr = ["apple","banana"];

console.log(arr.includes("banana"));



// indexOf()

arr = ["a","b","c"];

console.log(arr.indexOf("b"));



// concat()

a = [1,2];

b = [3,4];


console.log(a.concat(b));



// join()

arr = ["HTML","CSS","JS"];

console.log(arr.join("-"));



// reverse()

arr = [1,2,3];

arr.reverse();

console.log(arr);



// sort()

arr = [5,2,8];

arr.sort((a,b)=>a-b);

console.log(arr);



// reduce()

arr = [1,2,3,4];

sum = arr.reduce((total,value)=>{

    return total + value;

},0);


console.log(sum);



// some()

arr = [1,2,3];

console.log(arr.some(value=>value>2));



// every()

arr = [2,4,6];

console.log(arr.every(value=>value%2===0));



// ======================================================
// EVENT EMITTER (NODE.JS VERSION OF EVENTS)
// ======================================================


const EventEmitter = require("events");


const event = new EventEmitter();



function clickFunction(){

    console.log("Button Clicked");

}



event.on("click",clickFunction);



event.emit("click");


// ======================================================
// END
// ======================================================