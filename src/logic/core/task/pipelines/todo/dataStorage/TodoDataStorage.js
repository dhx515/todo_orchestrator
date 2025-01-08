/**
 * @file TodoDataStorage.js
 * @description Implement of Todo DataStorage
 */
import ITodoDataStorage from './ITodoDataStorage';


/** @implements {ITodoDataStorage} */
export default class TodoDataStorage extends ITodoDataStorage {
    #todoList = null;
    
    constructor() {
        super();
    }

    getTodoList() {
        return this.#todoList;
    }

    setTodoList(param) {
        this.#todoList = param;
    }

    addTodoItem(param) {
        this.#todoList.push(param);
    }

    addTodoItemList(param) {
        param.forEach(item => {
            this.#todoList.push(item);
        });
    }

    deleteTodoItem(param) {
        const index = this.#todoList.findIndex(item => item === param);
        if (index !== -1) {
            this.#todoList.splice(index, 1);
        }
    }

    deleteTodoItemList(param) {
        param.forEach(item => {
            this.deleteTodoItem(item);
        });
    }
}