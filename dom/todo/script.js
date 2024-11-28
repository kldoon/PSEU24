const inputEle = document.getElementById("new-todo");
const todosEle = document.getElementById("todos");
let items = [];

const renderItems = () => {
    todosEle.innerHTML = "";
    items.forEach((item, index) => {
        todosEle.insertAdjacentHTML('beforeend', `
        <li>
            <input type="checkbox">
            <p>${index + 1}. ${item}</p>
            <div>
            <button onclick="deleteItem(${index})">❌</button>
            <button>✏</button>
            </div>
        </li>`);
    })
}

const addItem = () => {
    let value = "";
    value = inputEle.value;
    if (value.length > 0) {    // validation
        items.push(value)
        inputEle.value = "";
        renderItems();
    }
}

const deleteItem = (index) => {
    items.splice(index, 1);
    // items = items.filter(item => item !== value);
    // items = items.filter(item => {
    //     if (item === value) return false;
    //     else return true;
    // });
    renderItems();
}