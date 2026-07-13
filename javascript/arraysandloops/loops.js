// let i=1;//variable of loop
// while(i<=5){
//     console.log(`the value of of: ${i}`);
//     i++;//iteration
// }
// // for loop
// for(let i=1;i<=5;i++){
//     console.log(i);

// }
// let randomNumber=0;
// while(randomNumber<0.5){
//     randomNumber=Math.random();
    
// }
// console.log(randomNumber);
    
// let a=[];
// for(let val=0;val<=5;val++){

// console.log(val);
// a.push(val);
// console.log(a);

// }
// console.log(a);
// a.splice(2,3);
// console.log(a)
// const nums=[1,2,3];
// let total=0;//accumulartor variable 
// //acummulator pattern
// for(let i=0;i<=nums.length-1;i++){
// const num=nums[i];
// total=total+num;

// }
// console.log(total);
// const numbers = [1, 2, 3, 4];
// const doublenum = [];
// for (let i = 0; i < numbers.length; i++) {
//     let val = numbers[i];
//     doublenum.push(val * 2);
// }

// console.log(doublenum);
const array1=[1,2,3];
const array2=array1.slice();
array2.push(4);
console.log(array1);
console.log(array2);


array2.splice(1,1);
console.log(array2);
const [fristValue,secondValue

] =[1,2,3,4];
console.log(fristValue);// This is called array destructuring in JavaScript.
for(let i=0;i<=10;i++){
   // console.log(i);
    if((i%3)=== 0){
        //console.log("the values is:"+i);
        continue;
    }
    console.log(i);
}
console.log("while loop")
let x=0;
while(x<=10){
    if(x%2===0){
        x++;
        continue;//these skip the number and continue to another number
    }
    console.log(x);
    x++;
}