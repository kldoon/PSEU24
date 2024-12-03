const inputEle = document.getElementById("new-todo");
const todosEle = document.getElementById("todos");
const doneEle = document.getElementById("done");

// const EMPTY_ITEM_TEMPLATE = {
//     id: Date.now(),
//     title: value,
//     done: false
// }

const storeData = () => {
    localStorage.setItem('todos', JSON.stringify(items));
}

const readData = () => {
    try {
        const strJSON = localStorage.getItem('todos');
        return strJSON === null ? [] : JSON.parse(strJSON);

    } catch (error) {
        return [];
    }
}

const renderItems = (rItems = items) => {
    todosEle.innerHTML = "";
    doneEle.innerHTML = "";
    rItems.forEach((item, index) => {
        const strEl = `
        <li>
        <input type="checkbox" onchange="toggle(${index})" ${item.done ? 'checked' : ''}>
        <p>${index + 1}. ${item.title}</p>
        <div>
        <button onclick="deleteItem(${index})">❌</button>
        ${item.done ? '' : `<button onclick="edit(${index})">✏</button>`}
        </div>
        </li>`;

        if (!item.done) {
            todosEle.insertAdjacentHTML('beforeend', strEl);
        } else {
            doneEle.insertAdjacentHTML('beforeend', strEl);
        }
    })
}

let items = readData();
renderItems();

const addItem = (event) => {
    if (event && event.key !== "Enter") {
        return;
    }

    let value = "";
    value = inputEle.value;
    if (value.length > 0) {    // validation
        const newItem = {
            id: Date.now(),
            title: value,
            done: false
        }
        items.push(newItem)
        inputEle.value = "";
        renderItems();
    }
    storeData();
}

const deleteItem = (index) => {
    items.splice(index, 1);
    // items = items.filter(item => item !== value);
    // items = items.filter(item => {
    //     if (item === value) return false;
    //     else return true;
    // });
    renderItems();
    storeData();
}

const toggle = (index) => {
    items[index].done = !items[index].done;
    renderItems();
    storeData();
}

const search = (event) => {
    const term = event.target.value.toLowerCase();
    if (term.length >= 3) {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(term));
        renderItems(filteredItems);
    } else {
        renderItems();
    }
}

const edit = (index) => {
    items[index].title = prompt("Please enter new title", items[index].title) || items[index].title;
    renderItems();
}