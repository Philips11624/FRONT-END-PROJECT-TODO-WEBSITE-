const items = JSON.parse(localStorage.getItem('todo'))
const ongoing = items.filter((val) => {
    return val.disabled == false
})
const todoList = document.getElementById("todoList");


ongoing.forEach(item => {
    const li = document.createElement('li')
    li.innerHTML = `
    <div class="todo-container"> 
    <p>${item.text}</p>
    <p id='date'>${item.date}</p> 
    <p id='time'>${item.time}</p> 
    </div>
    `
    todoList.appendChild(li)
});
