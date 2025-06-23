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
}