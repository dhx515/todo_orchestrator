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

    increaseItemCount(param, value) {
        const newCount = this.#summary[param] + value;
        this.#summary[param] = newCount;
    }

    decreaseItemCount(param, value) {
        const currentCount = this.#summary[param];
        const newCount = Math.max(0, currentCount - value); // 음수 방지
        this.#summary[param] = newCount;
    }
}