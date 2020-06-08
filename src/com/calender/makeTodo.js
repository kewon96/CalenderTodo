

export const makeTodo = () => {
    let addTodayList = document.querySelectorAll('.add-today');
    const achievementValue = document.getElementById('achievement-value'); // 달성률 range
    const achievementTxt = document.getElementById('achievement-txt'); // 달성률 표시하는 label
    const todoList = document.querySelector('.todo-list');

    let counter = 1;
    
    addTodayList.forEach(addToday => {
        addToday.addEventListener('click', () => {
            const todoOne = document.createElement('div'); // todo-one
                  todoOne.className = 'todo-one';
            const checks = document.createElement('div'); // checkBox Container
                  checks.className = 'checks etrans';

            const checkbox = document.createElement('input');
                  checkbox.type = 'checkbox';
                  checkbox.id = counter + 1;
                  checks.appendChild(checkbox);
            const label = document.createElement('label');
                  label.htmlFor = counter + 1;
                  checks.appendChild(label);
                  todoOne.appendChild(checks);

            const text = document.createElement('input');
                  text.type = 'text';
                  text.className = 'content';
                  todoOne.appendChild(text);

            const i1 = document.createElement('i');
                  i1.className = 'fa fa-plus-square add-today';
                  todoOne.appendChild(i1);

            const i2 = document.createElement('i');
                  i2.className = 'fa fa-minus-square delete-today';
                  todoOne.appendChild(i2);

            todoList.append(todoOne);
        });
    });
    
    achievementValue.addEventListener('input', () => {
        achievementTxt.innerHTML = achievementValue.value + '%';
    })
}

export default { makeTodo };