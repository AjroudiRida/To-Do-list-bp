import './style.css';
import {
  addTask, remove, clearAll, statusUpdate, edit, display, AllEventHandler,
} from './module/crud.js';

const taskList = [];

const { localStorage } = window;

// display tasks when page load
window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('taskList'));
  if (data) {
    display(localStorage);
    AllEventHandler();
  }
});

const docEvents = (e) => {
  if (e.key === 'Enter' || e.type === 'click') {
    addTask(taskList, localStorage);
    edit(localStorage);
    remove(localStorage);
    clearAll();
    statusUpdate();
  }
};

document.addEventListener('keyup', docEvents);
document.addEventListener('click', docEvents);
