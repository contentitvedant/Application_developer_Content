// app.js

document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const addTodoButton = document.getElementById('add-todo');
    const newTodoInput = document.getElementById('new-todo');

    // Add new todo item
    addTodoButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(todoItem);
            newTodoInput.value = '';
        }
    }

    // Use event delegation to handle click events on the todo list
    todoList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-btn')) {
            // Delete todo item
            const todoItem = event.target.parentElement;
            todoList.removeChild(todoItem);
        } else if (event.target.tagName === 'SPAN') {
            // Toggle completed status
            event.target.parentElement.classList.toggle('completed');
        }
    });

    // Add event listeners to demonstrate event bubbling and capturing
    const elements = ['body', '.container', '.todo-container', 'ul', 'li', 'button'];
    elements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            // Bubbling phase
            element.addEventListener('click', (event) => {
                console.log(`Bubbling: ${element.tagName || element.className} (event target: ${event.target.tagName})`);
            }, false);
            // Capturing phase
            element.addEventListener('click', (event) => {
                console.log(`Capturing: ${element.tagName || element.className} (event target: ${event.target.tagName})`);
            }, true);
        });
    });
});
