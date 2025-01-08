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
        const index = this.#cancelList.findIndex(item => item === param);
        if (index !== -1) {
            this.#cancelList.splice(index, 1);
        }
    }

    deleteCancelItemList(param) {
        param.forEach(item => {
            this.deleteCancelItem(item);
        });
    }
}