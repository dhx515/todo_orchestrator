/**
 * @file TodoDataStorage.js
 * @description Implement of Todo DataStorage
 */
import IDataStorage from '@/logic/shared/interfaces/IDataStorage';


/** @implements {IDataStorage} */
export default class TodoDataStorage extends IDataStorage {
    #todoList = null;
    
    constructor() {
        super();
    }

    /**
     * @returns {string[]} 
     */
    getTodoList() {
        return this.#todoList;
    }

    /**
     * @param {string[]} param 
     */
    setTodoList(param) {
        this.#todoList = param;
    }
}