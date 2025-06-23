/**
 * @file IDoneDataStorage.js
 * @description Interface of Done DataStorage
 */
import IDataStorage from '../../../../../shared/interfaces/IDataStorage';


/** @interface */
export default class IDoneDataStorage extends IDataStorage {
    constructor() {
        super();
    }

    /**
     * @returns {string[]} 
     */
    getDoneList() {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string[]} param 
     */
    setDoneList(param) {
        throw new Error('Method not implemented');
    }
}