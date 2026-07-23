let todoList = [];

document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
    addTodo();
});

function addTodo() {

    const name = document.querySelector('.todo-name').value;
    const date = document.querySelector('.todo-date').value;

    // Don't add empty todo
    if (name === '') {
        alert("Enter a todo");
        return;
    }

    todoList.push({
        name: name,
        dueDate: date
    });

    // Clear inputs
    document.querySelector('.todo-name').value = '';
    document.querySelector('.todo-date').value = '';

    renderTodoList();
}

function renderTodoList() {

 let todoHTML = '';

    todoList.forEach((todo)=>{

        todoHTML += `
        <div class="common">
            <div class="delete">
                <p style="color:blue">${todo.name}</p>
                <p style="color:orange">${todo.dueDate}</p>

                <button class="delbut js-delete-todo-button">
                    Delete
                </button>
            </div>
        </div>
        `;

    }
    );
    // onclick="deleteTodo(${index})"
    // for (let i = 0; i < todoList.length; i++) {

    //     const todo = todoList[i];

    //     todoHTML += `
    //     <div class="common">
    //         <div class="delete">
            
    //            <p style="color:blue"> ${todo.name }</p>
                         
    //            <p style="color:orange"> ${todo.dueDate}</p>
    //             <button onclick="deleteTodo(${i})"class="delbut">
    //                 Delete
    //             </button>
    //         </div>
    //         </div>
    //     `;
    
    // }

    document.querySelector('.todo-list').innerHTML = todoHTML;

// document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
//     deleteButton.addEventListener('click',()=>{
//         todoList.splice(index,1);
//         renderTodoList();
//     })
// })
//document.querySelector('.todo-list').innerHTML = todoHTML;

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
    });
});
}

// function deleteTodo(index) {

//     todoList.splice(index, 1);

//     renderTodoList();
// }
