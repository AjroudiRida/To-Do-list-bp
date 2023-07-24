// display
const display = (localStorage) => {
  const taskContainer = document.querySelector('.task-container');
  const data = JSON.parse(localStorage.getItem('taskList'));
  const arr = [];
  const newData = [];
  data.forEach((task) => {
    arr.push(task.index);
  });

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i += 1) {
    data.forEach((task) => {
      if (arr[i] === task.index) {
        task.index = i;
        newData.push(task);
      }
    });
  }

  localStorage.setItem('taskList', JSON.stringify(newData));
  taskContainer.innerHTML = '';
  newData.forEach((task) => {
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
    if (task.completed) {
      const check = currentTask.querySelector('.left .checkbox-container .checkbox');
      const content = currentTask.querySelector('.left .content');
      content.style.textDecoration = 'line-through';

      check.click();
    }
    taskContainer.appendChild(currentTask);
  });
};

// add user activities styles
const AllEventHandler = () => {
  const taskContainer = document.querySelector('.task-container');
  const allTasks = taskContainer.querySelectorAll('.task');
  if (allTasks.length !== 0) {
    allTasks.forEach((tsk) => {
      const content = tsk.querySelector('.content');

      content.addEventListener('click', () => {
        allTasks.forEach((tsks) => {
          tsks.style.backgroundColor = '#fff';
          tsks.getElementsByClassName('material-symbols-sharp')[0].textContent = 'more_vert';
        });

        document.addEventListener('click', (event) => {
          const isClickInsideDiv = taskContainer.contains(event.target);
          if (!isClickInsideDiv) {
            tsk.style.backgroundColor = '#fff';
            tsk.getElementsByClassName('material-symbols-sharp')[0].textContent = 'more_vert';
          }
        });
        tsk.style.backgroundColor = '#E3E2AE';
        tsk.getElementsByClassName('material-symbols-sharp')[0].textContent = 'delete';
      });
      content.addEventListener('focus', () => {
        content.style.outline = 'none';
      });
    });
  }
};

// add a task
const addTask = (taskList, localStorage) => {
  const taskContainer = document.querySelector('.task-container');
  let data = [];
  const addBtn = document.querySelector('.add-task span');
  const taskInput = document.querySelector('#addTask');
  const eventHandler = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (taskInput.value !== '') {
        if (localStorage.getItem('taskList')) {
          data = JSON.parse(localStorage.getItem('taskList'));
        } else {
          localStorage.setItem('taskList', JSON.stringify(taskList));
          data = JSON.parse(localStorage.getItem('taskList'));
        }
        const description = document.querySelector('#addTask').value;
        const newIndex = data.length === 0 ? 0 : data.length;

        const task = {
          description,
          completed: false,
          index: newIndex,
        };
        data.push(task);
        localStorage.setItem('taskList', JSON.stringify(data));
        document.querySelector('#addTask').value = '';
        display(localStorage, taskContainer);
        AllEventHandler(taskContainer);
      }
    }
  };
  taskInput.addEventListener('keyup', eventHandler);
  addBtn.addEventListener('click', eventHandler);
};

// remove a task
const remove = (localStorage) => {
  const taskContainer = document.querySelector('.task-container');
  const tasks = taskContainer.querySelectorAll('.task');
  tasks.forEach((task) => {
    const data = JSON.parse(localStorage.getItem('taskList'));
    const btn = task.querySelector('.material-symbols-sharp');
    if (btn.textContent === 'delete') {
      btn.addEventListener('click', () => {
        const newArr = data.filter((item) => item.index !== parseInt(btn.parentNode.getAttribute('data-index'), 10));
        localStorage.setItem('taskList', JSON.stringify(newArr));
        display(localStorage);
        AllEventHandler();
      });
    }
  });
};

// change the status of completed variable
const statusUpdate = () => {
  const taskContainer = document.querySelector('.task-container');
  const tasks = taskContainer.querySelectorAll('.task');
  const data = JSON.parse(localStorage.getItem('taskList'));
  tasks.forEach((task) => {
    const check = task.querySelector('.left .checkbox');
    const content = task.querySelector('.left .content');
    check.addEventListener('change', (e) => {
      if (e.target.checked) {
        content.style.textDecoration = 'line-through';
        data.forEach((tsk) => {
          if (parseInt(tsk.index, 10) === parseInt(task.getAttribute('data-index'), 10)) {
            tsk.completed = true;
            localStorage.setItem('taskList', JSON.stringify(data));
          }
        });
      } else {
        content.style.textDecoration = 'none';
        check.style.display = 'inline-block';
        data.forEach((tsk) => {
          if (parseInt(tsk.index, 10) === parseInt(task.getAttribute('data-index'), 10)) {
            tsk.completed = false;
            localStorage.setItem('taskList', JSON.stringify(data));
          }
        });
      }
    });
  });
};

// clear all function
const clearAll = () => {
  const taskContainer = document.querySelector('.task-container');
  const tasks = taskContainer.querySelectorAll('.task');
  let data = JSON.parse(localStorage.getItem('taskList'));
  const clearBtn = document.querySelector('.clear p');
  clearBtn.addEventListener('click', () => {
    tasks.forEach((task) => {
      const check = task.querySelector('.left .checkbox');
      if (check.checked) {
        const newArr = data.filter((item) => item.index !== parseInt(task.getAttribute('data-index'), 10));
        data = newArr;
        localStorage.setItem('taskList', JSON.stringify(newArr));
        display(localStorage);
        AllEventHandler();
      }
    });
  });
};

// edit a task
const edit = (localStorage) => {
  const taskContainer = document.querySelector('.task-container');
  const tasks = taskContainer.querySelectorAll('.task');
  tasks.forEach((task) => {
    const data = JSON.parse(localStorage.getItem('taskList'));

    const content = task.querySelector('.left .content');
    content.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();

        data.forEach((tsk) => {
          if (parseInt(tsk.index, 10) === parseInt(task.getAttribute('data-index'), 10)) {
            tsk.description = content.textContent;
          }
        });

        localStorage.setItem('taskList', JSON.stringify(data));
        display(localStorage);
        AllEventHandler();
      }
    });
  });
};

export {
  addTask, remove, statusUpdate, clearAll, edit, display, AllEventHandler,
};