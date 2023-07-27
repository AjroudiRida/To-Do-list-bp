import {
  addTask,
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
});
