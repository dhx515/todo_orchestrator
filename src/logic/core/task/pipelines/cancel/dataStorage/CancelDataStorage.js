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

    addCancelItem(param) {
        this.#cancelList.push(param);
    }

    addCancelItemList(param) {
        param.forEach(item => {
            this.#cancelList.push(item);
        });
    }

    deleteCancelItem(param) {
        this.#cancelList = this.#cancelList.filter((item) => item !== param);
    }

    deleteCancelItemList(param) {
        param.forEach(item => {
            this.#cancelList = this.#cancelList.filter((done) => done !== item);
        });
    }
}