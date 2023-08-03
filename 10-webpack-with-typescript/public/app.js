/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtStart) {
        this.hostElement.insertAdjacentElement(insertAtStart ? 'afterbegin' : 'beforeend', this.element);
    }
}


/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectInput": () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-component */ "./src/components/base-component.ts");
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/validation */ "./src/util/validation.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project-state */ "./src/state/project-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class ProjectInput extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.renderContent();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    renderContent() { }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const validateTitleConfig = { value: enteredTitle, required: true };
        const validateDescConfig = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const validatePeopleConfig = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate(validateTitleConfig) ||
            !_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate(validateDescConfig) ||
            !_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate(validatePeopleConfig)) {
            alert('Invalid Input');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autoBind
], ProjectInput.prototype, "submitHandler", null);


/***/ }),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectItem": () => (/* binding */ ProjectItem)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-component */ "./src/components/base-component.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class ProjectItem extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(hostId, project) {
        super('single-project', hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get persons() {
        return this.project.people === 1 ? '1 person' : `${this.project.people} people`;
    }
    dragStartHandler(event) {
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(event) {
        console.log('DragEnd', event);
    }
    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = `${this.persons} assigned`;
        this.element.querySelector('p').textContent = this.project.description;
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autoBind
], ProjectItem.prototype, "dragStartHandler", null);
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autoBind
], ProjectItem.prototype, "dragEndHandler", null);


/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-component */ "./src/components/base-component.ts");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project-state */ "./src/state/project-state.ts");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-item */ "./src/components/project-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class ProjectList extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(type) {
        super('project-list', 'app', false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listElem = this.element.querySelector('ul');
            listElem.classList.add('droppable');
        }
    }
    dragLeaveHandler(_event) {
        const listElem = this.element.querySelector('ul');
        listElem.classList.remove('droppable');
    }
    dropHandler(event) {
        const projectId = event.dataTransfer.getData('text/plain');
        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.moveProject(projectId, this.type === 'active' ? _models_project__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Active : _models_project__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Finished);
    }
    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addListener((projects) => {
            const relevantProjects = projects.filter((f) => {
                if (this.type === 'active') {
                    return f.status === _models_project__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Active;
                }
                return f.status === _models_project__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    }
    renderProjects() {
        const listElem = document.getElementById(`${this.type}-projects-list`);
        listElem.innerHTML = '';
        for (const item of this.assignedProjects) {
            new _project_item__WEBPACK_IMPORTED_MODULE_4__.ProjectItem(this.element.querySelector('ul').id, item);
        }
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autoBind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autoBind
], ProjectList.prototype, "dragLeaveHandler", null);
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autoBind
], ProjectList.prototype, "dropHandler", null);


/***/ }),

/***/ "./src/decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autoBind": () => (/* binding */ autoBind)
/* harmony export */ });
function autoBind(_target, _methodName, descriptor) {
    return {
        configurable: true,
        get() {
            return descriptor.value.bind(this);
        },
    };
}


/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectStatus": () => (/* binding */ ProjectStatus)
/* harmony export */ });
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/state/project-state.ts":
/*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectState": () => (/* binding */ ProjectState),
/* harmony export */   "projectState": () => (/* binding */ projectState)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");

class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ProjectState();
            return this.instance;
        }
    }
    addProject(title, description, numOfPeople) {
        const newProject = new _models_project__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, numOfPeople, _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find((f) => f.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listnerFn of this.listeners) {
            listnerFn(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance();


/***/ }),

/***/ "./src/util/validation.ts":
/*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
function validate(input) {
    let isValid = true;
    if (input.required) {
        isValid = isValid && input.value.toString().trim().length !== 0;
    }
    if (input.minLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length >= input.minLength;
    }
    if (input.maxLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length <= input.maxLength;
    }
    if (input.min != null && typeof input.value === 'number') {
        isValid = isValid && input.value >= input.min;
    }
    if (input.max != null && typeof input.value === 'number') {
        isValid = isValid && input.value <= input.max;
    }
    return isValid;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-input */ "./src/components/project-input.ts");
/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-list */ "./src/components/project-list.ts");


new _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('active');
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('finished');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hELE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO0tBQy9DO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztVQzNCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wRDtBQUNGO0FBRXhELElBQUksbUVBQVksRUFBRSxDQUFDO0FBQ25CLElBQUksaUVBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixJQUFJLGlFQUFXLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWlucHV0LnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtaXRlbS50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2RlY29yYXRvcnMvYXV0b2JpbmQudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL21vZGVscy9wcm9qZWN0LnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9zdGF0ZS9wcm9qZWN0LXN0YXRlLnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50LCBVIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IHtcbiAgdGVtcGxhdGVFbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICBob3N0RWxlbWVudDogVDtcbiAgZWxlbWVudDogVTtcblxuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZUlkOiBzdHJpbmcsIGhvc3RFbGVtZW50SWQ6IHN0cmluZywgaW5zZXJ0QXRTdGFydDogYm9vbGVhbiwgbmV3RWxlbWVudElkPzogc3RyaW5nKSB7XG4gICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKSEgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCkhIGFzIFQ7XG5cbiAgICBjb25zdCBpbXBvcnRlZE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuICAgIHRoaXMuZWxlbWVudCA9IGltcG9ydGVkTm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBVO1xuICAgIGlmIChuZXdFbGVtZW50SWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5pZCA9IG5ld0VsZW1lbnRJZDtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2goaW5zZXJ0QXRTdGFydCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaChpbnNlcnRBdFN0YXJ0OiBib29sZWFuKSB7XG4gICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoaW5zZXJ0QXRTdGFydCA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLCB0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgYWJzdHJhY3QgY29uZmlndXJlKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHJlbmRlckNvbnRlbnQoKTogdm9pZDtcbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBWYWxpZGF0aW9uIGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBhdXRvQmluZCBhcyBBdXRvQmluZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQnO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcHJvamVjdC1zdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxGb3JtRWxlbWVudD4ge1xuICB0aXRsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHBlb3BsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncHJvamVjdC1pbnB1dCcsICdhcHAnLCB0cnVlLCAndXNlci1pbnB1dCcpO1xuICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Blb3BsZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgfVxuXG4gIGNvbmZpZ3VyZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyKTtcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoKSB7fVxuXG4gIHByaXZhdGUgZ2F0aGVyVXNlcklucHV0KCk6IFtzdHJpbmcsIHN0cmluZywgbnVtYmVyXSB8IHZvaWQge1xuICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGVvcGxlID0gdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQudmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZGF0ZVRpdGxlQ29uZmlnOiBWYWxpZGF0aW9uLklWYWxpZGF0YWJsZSA9IHsgdmFsdWU6IGVudGVyZWRUaXRsZSwgcmVxdWlyZWQ6IHRydWUgfTtcbiAgICBjb25zdCB2YWxpZGF0ZURlc2NDb25maWc6IFZhbGlkYXRpb24uSVZhbGlkYXRhYmxlID0ge1xuICAgICAgdmFsdWU6IGVudGVyZWREZXNjcmlwdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluTGVuZ3RoOiA1LFxuICAgIH07XG4gICAgY29uc3QgdmFsaWRhdGVQZW9wbGVDb25maWc6IFZhbGlkYXRpb24uSVZhbGlkYXRhYmxlID0ge1xuICAgICAgdmFsdWU6ICtlbnRlcmVkUGVvcGxlLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDUsXG4gICAgfTtcblxuICAgIGlmIChcbiAgICAgICFWYWxpZGF0aW9uLnZhbGlkYXRlKHZhbGlkYXRlVGl0bGVDb25maWcpIHx8XG4gICAgICAhVmFsaWRhdGlvbi52YWxpZGF0ZSh2YWxpZGF0ZURlc2NDb25maWcpIHx8XG4gICAgICAhVmFsaWRhdGlvbi52YWxpZGF0ZSh2YWxpZGF0ZVBlb3BsZUNvbmZpZylcbiAgICApIHtcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIElucHV0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbZW50ZXJlZFRpdGxlLCBlbnRlcmVkRGVzY3JpcHRpb24sICtlbnRlcmVkUGVvcGxlXTtcbiAgICB9XG4gIH1cblxuICBjbGVhcklucHV0cygpIHtcbiAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gIH1cblxuICBAQXV0b0JpbmRcbiAgcHJpdmF0ZSBzdWJtaXRIYW5kbGVyKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcklucHV0ID0gdGhpcy5nYXRoZXJVc2VySW5wdXQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VySW5wdXQpKSB7XG4gICAgICBjb25zdCBbdGl0bGUsIGRlc2MsIHBlb3BsZV0gPSB1c2VySW5wdXQ7XG4gICAgICBwcm9qZWN0U3RhdGUuYWRkUHJvamVjdCh0aXRsZSwgZGVzYywgcGVvcGxlKTtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dHMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHsgYXV0b0JpbmQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL2F1dG9iaW5kJztcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4uL21vZGVscy9kcmFnLWRyb3AnO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQ8SFRNTFVMaXN0RWxlbWVudCwgSFRNTExJRWxlbWVudD4gaW1wbGVtZW50cyBEcmFnZ2FibGUge1xuICBwcml2YXRlIHByb2plY3Q6IFByb2plY3Q7XG5cbiAgZ2V0IHBlcnNvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdC5wZW9wbGUgPT09IDEgPyAnMSBwZXJzb24nIDogYCR7dGhpcy5wcm9qZWN0LnBlb3BsZX0gcGVvcGxlYDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGhvc3RJZDogc3RyaW5nLCBwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgc3VwZXIoJ3NpbmdsZS1wcm9qZWN0JywgaG9zdElkLCBmYWxzZSwgcHJvamVjdC5pZCk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcblxuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBAYXV0b0JpbmRcbiAgZHJhZ1N0YXJ0SGFuZGxlcihldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyIS5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5wcm9qZWN0LmlkKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIhLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gIH1cblxuICBAYXV0b0JpbmRcbiAgZHJhZ0VuZEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdEcmFnRW5kJywgZXZlbnQpO1xuICB9XG5cbiAgY29uZmlndXJlKCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gIH1cblxuICByZW5kZXJDb250ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMicpIS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC50aXRsZTtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDMnKSEudGV4dENvbnRlbnQgPSBgJHt0aGlzLnBlcnNvbnN9IGFzc2lnbmVkYDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpIS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBhdXRvQmluZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQnO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcHJvamVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBEcmFnVGFyZ2V0IH0gZnJvbSAnLi4vbW9kZWxzL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBQcm9qZWN0SXRlbSB9IGZyb20gJy4vcHJvamVjdC1pdGVtJztcblxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRWxlbWVudD4gaW1wbGVtZW50cyBEcmFnVGFyZ2V0IHtcbiAgYXNzaWduZWRQcm9qZWN0czogUHJvamVjdFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiAnYWN0aXZlJyB8ICdmaW5pc2hlZCcpIHtcbiAgICBzdXBlcigncHJvamVjdC1saXN0JywgJ2FwcCcsIGZhbHNlLCBgJHt0eXBlfS1wcm9qZWN0c2ApO1xuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBAYXV0b0JpbmRcbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbGlzdEVsZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSE7XG4gICAgICBsaXN0RWxlbS5jbGFzc0xpc3QuYWRkKCdkcm9wcGFibGUnKTtcbiAgICB9XG4gIH1cblxuICBAYXV0b0JpbmRcbiAgZHJhZ0xlYXZlSGFuZGxlcihfZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RFbGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhO1xuICAgIGxpc3RFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xuICB9XG5cbiAgQGF1dG9CaW5kXG4gIGRyb3BIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC5kYXRhVHJhbnNmZXIhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBwcm9qZWN0U3RhdGUubW92ZVByb2plY3QoXG4gICAgICBwcm9qZWN0SWQsXG4gICAgICB0aGlzLnR5cGUgPT09ICdhY3RpdmUnID8gUHJvamVjdFN0YXR1cy5BY3RpdmUgOiBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkXG4gICAgKTtcbiAgfVxuXG4gIGNvbmZpZ3VyZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVySGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIHByb2plY3RTdGF0ZS5hZGRMaXN0ZW5lcigocHJvamVjdHM6IFByb2plY3RbXSkgPT4ge1xuICAgICAgY29uc3QgcmVsZXZhbnRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoZikgPT4ge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYWN0aXZlJykge1xuICAgICAgICAgIHJldHVybiBmLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5BY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGYuc3RhdHVzID09PSBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSByZWxldmFudFByb2plY3RzO1xuICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBsaXN0SWQgPSBgJHt0aGlzLnR5cGV9LXByb2plY3RzLWxpc3RgO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpIS5pZCA9IGxpc3RJZDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKSEudGV4dENvbnRlbnQgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKSArICcgUFJPSkVDVFMnO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGApIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbGlzdEVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuYXNzaWduZWRQcm9qZWN0cykge1xuICAgICAgbmV3IFByb2plY3RJdGVtKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpIS5pZCwgaXRlbSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXV0b0JpbmQoX3RhcmdldDogYW55LCBfbWV0aG9kTmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWUuYmluZCh0aGlzKTtcbiAgICB9LFxuICB9IGFzIFByb3BlcnR5RGVzY3JpcHRvcjtcbn1cbiIsImV4cG9ydCBlbnVtIFByb2plY3RTdGF0dXMge1xuICBBY3RpdmUsXG4gIEZpbmlzaGVkLFxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpZDogc3RyaW5nLFxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyBwZW9wbGU6IG51bWJlcixcbiAgICBwdWJsaWMgc3RhdHVzOiBQcm9qZWN0U3RhdHVzXG4gICkge31cbn1cbiIsImltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5cbnR5cGUgTGlzdGVuZXI8VD4gPSAoaXRlbXM6IFRbXSkgPT4gdm9pZDtcblxuY2xhc3MgU3RhdGU8VD4ge1xuICBwcm90ZWN0ZWQgbGlzdGVuZXJzOiBMaXN0ZW5lcjxUPltdID0gW107XG5cbiAgYWRkTGlzdGVuZXIobGlzdGVuZXJGbjogTGlzdGVuZXI8VD4pIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyRm4pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0U3RhdGUgZXh0ZW5kcyBTdGF0ZTxQcm9qZWN0PiB7XG4gIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvamVjdFN0YXRlO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJvamVjdFN0YXRlKCk7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICBhZGRQcm9qZWN0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIG51bU9mUGVvcGxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbnVtT2ZQZW9wbGUsXG4gICAgICBQcm9qZWN0U3RhdHVzLkFjdGl2ZVxuICAgICk7XG5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIG1vdmVQcm9qZWN0KHByb2plY3RJZDogc3RyaW5nLCBuZXdTdGF0dXM6IFByb2plY3RTdGF0dXMpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChmKSA9PiBmLmlkID09PSBwcm9qZWN0SWQpO1xuICAgIGlmIChwcm9qZWN0ICYmIHByb2plY3Quc3RhdHVzICE9PSBuZXdTdGF0dXMpIHtcbiAgICAgIHByb2plY3Quc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGxpc3RuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdG5lckZuKHRoaXMucHJvamVjdHMuc2xpY2UoKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0U3RhdGUgPSBQcm9qZWN0U3RhdGUuZ2V0SW5zdGFuY2UoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRhYmxlIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBtaW5MZW5ndGg/OiBudW1iZXI7XG4gIG1heExlbmd0aD86IG51bWJlcjtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dDogSVZhbGlkYXRhYmxlKSB7XG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgaWYgKGlucHV0LnJlcXVpcmVkKSB7XG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwO1xuICB9XG4gIGlmIChpbnB1dC5taW5MZW5ndGggIT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUubGVuZ3RoID49IGlucHV0Lm1pbkxlbmd0aDtcbiAgfVxuICBpZiAoaW5wdXQubWF4TGVuZ3RoICE9IG51bGwgJiYgdHlwZW9mIGlucHV0LnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIGlucHV0LnZhbHVlLmxlbmd0aCA8PSBpbnB1dC5tYXhMZW5ndGg7XG4gIH1cbiAgaWYgKGlucHV0Lm1pbiAhPSBudWxsICYmIHR5cGVvZiBpbnB1dC52YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiBpbnB1dC52YWx1ZSA+PSBpbnB1dC5taW47XG4gIH1cbiAgaWYgKGlucHV0Lm1heCAhPSBudWxsICYmIHR5cGVvZiBpbnB1dC52YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiBpbnB1dC52YWx1ZSA8PSBpbnB1dC5tYXg7XG4gIH1cbiAgcmV0dXJuIGlzVmFsaWQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3RJbnB1dCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0LWlucHV0JztcbmltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3QtbGlzdCc7XG5cbm5ldyBQcm9qZWN0SW5wdXQoKTtcbm5ldyBQcm9qZWN0TGlzdCgnYWN0aXZlJyk7XG5uZXcgUHJvamVjdExpc3QoJ2ZpbmlzaGVkJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=