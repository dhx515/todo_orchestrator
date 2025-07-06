/**
 * @file CancelDataStorage.js
 * @description Implement of Cancel DataStorage
 */
import IDataStorage from '@/logic/shared/interfaces/IDataStorage';


/** @implements {IDataStorage} */
export default class CancelDataStorage extends IDataStorage {
    #cancelList = null;
    
    constructor() {
        super();
    }

    /**
     * @returns {string[]} 
     */
    getCancelList() {
        return this.#cancelList;
    }

    /**
     * @param {string[]} param 
     */
    setCancelList(param) {
        this.#cancelList = param;
    }
}