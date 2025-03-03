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

    /**
     * @param {string} param 
     */
    addDoneItem(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string[]} param 
     */
    addDoneItemList(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param 
     */
    deleteDoneItem(param) {
        throw new Error('Method not implemented');
    }
    
    /**
     * @param {string[]} param 
     */
    deleteDoneItemList(param) {
        throw new Error('Method not implemented');
    }
}