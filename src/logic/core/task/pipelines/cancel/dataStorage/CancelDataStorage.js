/**
 * @file CancelDataStorage.js
 * @description Implement of Cancel DataStorage
 */
import ICancelDataStorage from './ICancelDataStorage';


/** @implements {ICancelDataStorage} */
export default class CancelDataStorage extends ICancelDataStorage {
    #cancelList = null;
    
    constructor() {
        super();
    }

    getCancelList() {
        return this.#cancelList;
    }

    setCancelList(param) {
        this.#cancelList = param;
    }
}