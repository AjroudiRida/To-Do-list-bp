import {
  addTask, removeTask,
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
