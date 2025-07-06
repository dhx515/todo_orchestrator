/**
 * @file DoneDataStorage.js
 * @description Implement of Done DataStorage
 */
import IDataStorage from '@/logic/shared/interfaces/IDataStorage';


/** @implements {IDataStorage} */
export default class DoneDataStorage extends IDataStorage {
    #doneList = null;
    
    constructor() {
        super();
    }

    /**
     * @returns {string[]} 
     */
    getDoneList() {
        return this.#doneList;
    }

    /**
     * @param {string[]} param 
     */
    setDoneList(param) {
        this.#doneList = param;
    }
}