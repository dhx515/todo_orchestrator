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

    deleteDoneItem(param) {
        this.#doneList = this.#doneList.filter((item) => item !== param);
    }
}