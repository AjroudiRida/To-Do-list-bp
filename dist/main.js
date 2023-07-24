"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _module_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



const taskList = [];

const { localStorage } = window;


// display tasks when page load
window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('taskList'));
  if (data) {
    (0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.display)(localStorage);
    (0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.AllEventHandler)();
  }
});


const docEvents = (e) => {
  if (e.key === "Enter" || e.type === "click")
  {
    (0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskList, localStorage);
    (0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.edit)(localStorage);
    (0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.remove)(localStorage);
    (0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.clearAll)();
    (0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.statusUpdate)();
  }
}

document.addEventListener('keyup', docEvents);
document.addEventListener('click', docEvents);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
}

body {
  background-color: #f6f6f6;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
}

.container {
  width: 50vw;
  margin: 15rem auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 2px 5px 7px 2px rgba(0, 0, 0, 0.58);
}

.todolist-header p {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
}

.todolist-header,
.add-task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 0.1rem solid #f6f6f6;
}

.add-task input {
  flex-basis: 95%;
  height: 100%;
  border: 0;
  font-size: 1.5rem;
  font-weight: 400;
}

.add-task input::placeholder {
  font-weight: 400;
  color: lightgrey;
}

.checkbox-container {
  display: flex;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.add-task input:focus {
  outline: none;
}

.task-container {
  display: flex;
  flex-direction: column;
}

.task-container .task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid #f6f6f6;
}

input[type="checkbox"] {
  margin-right: 1rem;
}

.clear {
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.clear p {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: rgb(147, 144, 144);
  margin: 0;
}

.add-task span {
  cursor: pointer;
}

.task span {
  cursor: pointer;
}

.task-container .task .left {
  display: flex;
  font-size: 1.5rem;
  align-items: flex-start;
  column-gap: 1rem;
  flex-basis: 95%;
}

.task-container .task .left .content {
  flex-basis: 95%;
}

.clear p:hover {
  color: #000;
  text-decoration: underline;
  cursor: pointer;
}

.task-container .task .left .content p {
  margin: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #fff;
  border: 1px solid lightgrey;
  border-radius: 2px;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: white;
  border: none;
}

.checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container .checkmark::after {
  left: 4px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid #2196f3;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox-container input:checked ~ .checkmark::after {
  display: block;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllEventHandler: () => (/* binding */ AllEventHandler),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   clearAll: () => (/* binding */ clearAll),
/* harmony export */   display: () => (/* binding */ display),
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   statusUpdate: () => (/* binding */ statusUpdate)
/* harmony export */ });
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
      if(e.key === "Enter" || e.type === "click") {
        console.log(taskInput.value)
        if (taskInput.value!=='') {

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
  
          console.log(data);
          data.push(task);
          localStorage.setItem('taskList', JSON.stringify(data));
          document.querySelector('#addTask').value = '';
          display(localStorage, taskContainer);
          AllEventHandler(taskContainer);
        }
      }
    }
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
    //
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
}



/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);