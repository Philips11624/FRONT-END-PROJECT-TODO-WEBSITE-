const items = JSON.parse(localStorage.getItem('todo'))

const completed = items.filter((val) => {
    return val.disabled == true
})
const todoList = document.getElementById("todoList");


completed.forEach(item => {
    const li = document.createElement('li')
    li.innerHTML = `<div class="todo-container"> 
    <p>${item.text}</p>
    <p id='date'>${item.date}</p> 
    <p id='time'>${item.time}</p> 
    </div>`
    todoList.appendChild(li)
});
