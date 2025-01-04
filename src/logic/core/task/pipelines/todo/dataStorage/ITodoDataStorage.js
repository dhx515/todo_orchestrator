/**
 * @file ITodoDataStorage.js
 * @description Interface of Todo DataStorage
 */
import IDataStorage from '@/logic/shared/interfaces/IDataStorage';


/** @interface */
export default class ITodoDataStorage extends IDataStorage {
    constructor() {
        super();
    }

    /**
     * @returns {string[]} 
     */
    getTodoList() {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string[]} param 
     */
    setTodoList(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param 
     */
    addTodoItem(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string[]} param 
     */
    addTodoItemList(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param 
     */
    deleteTodoItem(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string[]} param 
     */
    deleteTodoItemList(param) {
        throw new Error('Method not implemented');
    }
}