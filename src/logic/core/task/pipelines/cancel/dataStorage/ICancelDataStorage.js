/**
 * @file ICancelDataStorage.js
 * @description Interface of Cancel DataStorage
 */
import IDataStorage from '../../../../../shared/interfaces/IDataStorage';


/** @interface */
export default class ICancelDataStorage extends IDataStorage {
    constructor() {
        super();
    }

    /**
     * @returns {string[]} 
     */
    getCancelList() {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string[]} param 
     */
    setCancelList(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param 
     */
    addCancelItem(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param 
     */
    deleteCancelItem(param) {
        throw new Error('Method not implemented');
    }
}