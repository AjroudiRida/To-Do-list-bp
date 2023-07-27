import {
  addTask,
  removeTask,
  edit,
  statusUpdate,
  clearAll,
} from './util.js';

describe('add and remove items', () => {
  test('add an item to the list', () => {
    const taskList = [];
    document.body.innerHTML = `
    <div class='task-container'></div>
    `;
    addTask(taskList, localStorage);
    const tasks = document.querySelectorAll('.task-container .task');
    expect(tasks).toHaveLength(1);
  });

  test('delete an item from the list', () => {
    document.body.innerHTML = `
    <div class='task-container'>
      <div class='task'>
      </div>
    </div>
    `;
    removeTask(localStorage);
    const tasks = document.querySelectorAll('.task-container .task');
    expect(tasks).toHaveLength(0);
  });
});

describe('edit, update completed status and clear All', () => {
  test('edit', () => {
    const data = [{
      description: 'description',
      completed: false,
      index: 0,
    }];
    localStorage.setItem('taskList', JSON.stringify(data));

    document.body.innerHTML = `
    <div class='task-container'>
      <div class='task'>
      ${data[0].description}
      </div>
    </div>  
    `;

    edit(localStorage);
    const tasks = document.querySelectorAll('.task-container .task .content');
    expect(tasks[0].textContent.trim()).toBe('updated description');
  });

  test('completed status update', () => {
    const data = [{
      description: 'description',
      completed: false,
      index: 0,
    }];
    localStorage.setItem('taskList', JSON.stringify(data));
    document.body.innerHTML = `
   <div class='task-container'>
    <div class='task'>
    <label class="checkbox-container">
    <input class="checkbox" type="checkbox" id="task-${data[0].index}" name="task" value="${data[0].description}" checked>
       <span class="checkmark"></span>
      </label>
       <div class="content" contentEditable="true">
        ${data[0].description}
         </div>
        </div>
       </div>
       `;
    statusUpdate();
    const tasks = JSON.parse(localStorage.getItem('taskList'));
    const {
      completed,
    } = tasks[0];
    expect(completed).toBeTruthy();
  });
  test('clear all', () => {
    const data = [{
      description: 'description',
      completed: false,
      index: 0,
    }];
    localStorage.setItem('taskList', JSON.stringify(data));
    document.body.innerHTML = `
    <div class='task-container'>
      <div class='task'>
          <label class="checkbox-container">
            <input class="checkbox" type="checkbox" id="task-${data[0].index}" name="task" value="${data[0].description}" checked>
            <span class="checkmark"></span>
          </label>
          <div class="content" contentEditable="true">
            ${data[0].description}
          </div>
      </div>
    </div>
    `;
    clearAll();
    const tasks = document.querySelectorAll('.task-container .task');
    expect(tasks).toHaveLength(0);
  });
});