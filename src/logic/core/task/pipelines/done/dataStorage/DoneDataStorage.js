/**
 * @file DoneDataStorage.js
 * @description Implement of Done DataStorage
 */
import IDoneDataStorage from './IDoneDataStorage';


/** @implements {IDoneDataStorage} */
export default class DoneDataStorage extends IDoneDataStorage {
    #doneList = null;
    
    constructor() {
        super();
    }

    getDoneList() {
        return this.#doneList;
    }

    setDoneList(param) {
        this.#doneList = param;
    }

    addDoneItem(param) {
        this.#doneList.push(param);
    }

    addDoneItemList(param) {
        param.forEach(item => {
            this.#doneList.push(item);
        });
    }

    deleteDoneItem(param) {
        const index = this.#doneList.findIndex(item => item === param);
        if (index !== -1) {
            this.#doneList.splice(index, 1);
        }
    }

    deleteDoneItemList(param) {
        param.forEach(item => {
            this.deleteDoneItem(item);
        });
    }
}