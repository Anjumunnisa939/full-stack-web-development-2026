const todoList=['teacher','sir','students'];


function todo(){
    const inputElements=document.querySelector('.to');
const name=inputElements.value;//it is values it takes
console.log(name);
todoList.push(name);
console.log(todoList);
let a=todoList[todoList.length - 1];
console.log(a);
document.querySelector('.screen').innerHTML=name;
rendertodolist();
}
rendertodolist();
function rendertodolist() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];

        const html = `
            <p>
                ${todo}
                <button onclick="
                    todoList.splice(${i}, 1);
                    rendertodolist();
                ">Delete</button>
            </p>
        `;

        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
// const todolist=[
//     'make dinner,wash dishes','watch youtube'
// ];
// console.log("length is "+todolist.length);
// const newArray=[];
// for(let index=0;index<=todolist.length;index++){
//     console.log(index);
//   newArray.push(todolist[index]);

// }
// console.log(newArray);
