/**
 * @file SummaryDataStorage.js
 * @description Implement of Summary DataStorage
 */
import IDataStorage from '@/logic/shared/interfaces/IDataStorage';


/** @implements {IDataStorage} */
export default class SummaryDataStorage extends IDataStorage {
    #summary = null;
    
    constructor() {
        super();
    }

    /**
     * @returns {Object}
     */
    getSummary() {
        return this.#summary;
    }

    /**
     * @param {Object} param
     */
    setSummary(param) {
        this.#summary = param;
    }
}