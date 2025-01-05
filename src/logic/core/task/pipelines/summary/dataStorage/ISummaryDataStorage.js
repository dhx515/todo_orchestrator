/**
 * @file ISummaryDataStorage.js
 * @description Interface of Summary DataStorage
 */
import IDataStorage from '@/logic/shared/interfaces/IDataStorage';


/** @interface */
export default class ISummaryDataStorage extends IDataStorage {
    constructor() {
        super();
    }

    /**
     * @returns {Object}
     */
    getSummary() {
        throw new Error('Method not implemented');
    }

    /**
     * @param {Object} param
     */
    setSummary(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param
     * @param {number} value
     */
    increaseItemCount(param, value) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param
     * @param {number} value
     */
    decreaseItemCount(param, value) {
        throw new Error('Method not implemented');
    }
}