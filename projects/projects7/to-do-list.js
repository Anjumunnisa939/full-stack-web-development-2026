const todoList=[];
function todo(){
    const inputElements=document.querySelector('.to');
const name=inputElements.value;//it is values it takes
console.log(name);
todoList.push(name);
console.log(todoList);
inputElements.value='';
document.querySelector('.screen').innerHTML=name;
}
