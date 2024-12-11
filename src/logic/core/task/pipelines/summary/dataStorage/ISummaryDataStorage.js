/**
 * @file ISummaryDataStorage.js
 * @description Interface of Summary DataStorage
 */
import IDataStorage from '../../../../../shared/interfaces/IDataStorage';


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
     */
    increaseItemCount(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param
     */
    decreaseItemCount(param) {
        throw new Error('Method not implemented');
    }
}