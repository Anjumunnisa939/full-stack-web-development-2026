let a=[10,20,30];
console.log(a);
a[2]=99;
console.log(a);
let arr = [1, 20, 22, 24];

console.log("Before clicking:", arr);

function add() {
    let addon = document.querySelector('.num').value;
    arr.push(Number(addon));

    console.log("After clicking:", arr);
}
let arr2=['hi','hello']
console.log(arr2);
 let rev=arr2.reverse()
 console.log(rev);
console.log(`reverse of this=>`+JSON.stringify(rev));
let loops=[];
for(let i=0;i<=10;i++){
   console.log(i*2);
    loops.push(i*2);

}
console.log(loops);
for(let i=5;i>=0;i--){
    console.log(i);
}
let i=5;
while(i>=0){
    console.log(i);
    i--;
}
console.log('hi')
let incre=[1,2,3,-1,0.1,99];
let final=[];
for(let i=0;i<incre.length;i++){
    final.push(incre[i]+1);
}
console.log(final);
console.log(
final.reverse());
let addone=[];
function addNum(array,num){
    for(let i=0;i<array.length;i++){
        addone.push(array[i]+num);
//console.log(addone);
    }
    return addone;

}
console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2,-1,0,99],2));
let result=[];
function added(array1,array2){
    for(let i=0;i<Math.min(array1.length,array2.length);i++){
result.push(array1[i]+array2[i]);
    }
    return result;
}
console.log(added([4,5,6],[9,6,8]));
let arrayelement=[];
let results =0;
function call(nums){
    for(let i=0;i<nums.length;i++){
        arrayelement.push(nums[i]);
        results=results+nums[i];
    }
    console.log(`the sum of array value is ${results}`);

}
call([1,-3,5]);
function addArrays(array1, array2) {
    let result = [];

    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        result.push(array1[i] + array2[i]);
    }

    return result;
}

console.log(addArrays([1, 2, 3], [4, 5, 6]));
function minMax(arr){
    let min=arr[0];
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min =arr[i];

        }
        if(arr[i]>max){
            max=arr[i];
        }
    
    }
    console.log("min:",min);
    console.log("max:",max);
}
minMax([4,5,-6]);