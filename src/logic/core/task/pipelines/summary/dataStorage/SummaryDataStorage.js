/**
 * @file SummaryDataStorage.js
 * @description Implement of Summary DataStorage
 */
import ISummaryDataStorage from './ISummaryDataStorage';


/** @implements {ISummaryDataStorage} */
export default class SummaryDataStorage extends ISummaryDataStorage {
    #summary = null;
    
    constructor() {
        super();
    }

    getSummary() {
        return this.#summary;
    }

    setSummary(param) {
        this.#summary = param;
    }
}