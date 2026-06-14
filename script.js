const inputField = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

function addTask() {
    const taskText = inputField.value;

    if (taskText === '') {
        alert('Пожалуйста, введите текст задачи!');
        return; 
    }

    const newLi = document.createElement('li');
    
    // 1. Создаем контейнер для текста задачи
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    newLi.appendChild(textSpan);

    // 2. Создаем кнопку удаления внутри этой задачи
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-btn'; // Даем класс для стилей
    newLi.appendChild(deleteBtn);

    // 3. Логика удаления: при клике на крестик удаляем именно этот элемент <li>
    deleteBtn.addEventListener('click', function() {
        newLi.remove(); // Специальный метод, который стирает элемент со страницы
    });

    todoList.appendChild(newLi);
    inputField.value = '';
}

addButton.addEventListener('click', addTask);
