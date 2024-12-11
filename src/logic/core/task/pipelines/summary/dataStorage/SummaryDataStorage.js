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

    increaseItemCount(param) {
        const newCount = this.#summary[param] + 1;
        this.#summary[param] = newCount;
    }

    decreaseItemCount(param) {
        const currentCount = this.#summary[param];
        const newCount = Math.max(0, currentCount - 1); // 음수 방지
        this.#summary[param] = newCount;
    }
}