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
const numbers = [1, 2, 3, 4];
const doublenum = [];
for (let i = 0; i < numbers.length; i++) {
    let val = numbers[i];
    doublenum.push(val * 2);
}

console.log(doublenum);