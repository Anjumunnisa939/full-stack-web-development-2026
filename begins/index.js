function anjum (my,frnd)
{
    console.log(`my name is ${my} and my frnd name is ${frnd} `);
}

anjum("anjum","amreen");



let name="anjum";
console.log(name.split(""));


let arr=["anjum",22,"lucknow"]
let obj={
    name:"anjum",
    age:22,
    city:"lucknow",
    address:{
        state:"up",
        country:"india"
    }
}
console.log([...arr],"\n",{...obj}, "\n",typeof arr,"\n",typeof obj);
for(let key in arr)
{
    console.log(key);
}
for(let key of arr)
{
    console.log(key);
}
console.log(arr[0]);
