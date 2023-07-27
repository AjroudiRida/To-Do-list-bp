const display = (localStorage) => {
  const taskContainer = document.querySelector('.task-container');
  const data = JSON.parse(localStorage.getItem('taskList'));

  taskContainer.innerHTML = '';
  data.forEach((task) => {
    const elem = `
    
      <div class="left">
        <label class="checkbox-container">
          <input class="checkbox" type="checkbox" id="task-${task.index}" name="task" value="${task.description}">
          <span class="checkmark"></span>
        </label>
        <div class="content" contentEditable="true">
           ${task.description}
        </div>
      </div>
      <span class="material-symbols-sharp">
        more_vert
      </span>
    
  `;

    const currentTask = document.createElement('div');
    currentTask.setAttribute('class', 'task');
    currentTask.setAttribute('data-index', task.index);
    currentTask.innerHTML = elem;
    taskContainer.appendChild(currentTask);
  });
};

const addTask = (taskList, localStorage) => {
  let data = [];

  if (localStorage.getItem('taskList')) {
    data = JSON.parse(localStorage.getItem('taskList'));
  } else {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    data = JSON.parse(localStorage.getItem('taskList'));
  }
  const description = 'description';
  const newIndex = data.length === 0 ? 0 : data.length;

  const task = {
    description,
    completed: false,
    index: newIndex,
  };

  data.push(task);
  localStorage.setItem('taskList', JSON.stringify(data));
  display(localStorage);
};

const removeTask = (localStorage) => {
  const taskContainer = document.querySelector('.task-container');
  const tasks = taskContainer.querySelectorAll('.task');
  tasks.forEach(() => {
    // const data = JSON.parse(localStorage.getItem('taskList'));
    const newArr = [];
    localStorage.setItem('taskList', JSON.stringify(newArr));
    display(localStorage);
  });
};

const edit = (localStorage) => {
  const taskContainer = document.querySelector('.task-container');
  const tasks = taskContainer.querySelectorAll('.task');
  const data = JSON.parse(localStorage.getItem('taskList'));
  tasks.forEach(() => {
    data.forEach((tsk) => {
      tsk.description = 'updated description';
    });
    localStorage.setItem('taskList', JSON.stringify(data));
    display(localStorage);
  });
};

const statusUpdate = () => {
  const taskContainer = document.querySelector('.task-container');
  const tasks = taskContainer.querySelectorAll('.task');
  const data = JSON.parse(localStorage.getItem('taskList'));
  tasks.forEach((task) => {
    const check = task.querySelector('.checkbox');
    if (check.checked) {
      data.forEach((tsk) => {
        tsk.completed = true;
        localStorage.setItem('taskList', JSON.stringify(data));
      });
    } else {
      data.forEach((tsk) => {
        tsk.completed = false;
        localStorage.setItem('taskList', JSON.stringify(data));
      });
    }
  });
};

const clearAll = () => {
  const taskContainer = document.querySelector('.task-container');
  const tasks = taskContainer.querySelectorAll('.task');
  let data = JSON.parse(localStorage.getItem('taskList'));
  tasks.forEach((task) => {
    const check = task.querySelector('.checkbox');
    if (check.checked) {
      data = [];
      localStorage.setItem('taskList', JSON.stringify(data));
      display(localStorage);
    }
  });
};

export {
  addTask, removeTask, edit, statusUpdate, clearAll,
};