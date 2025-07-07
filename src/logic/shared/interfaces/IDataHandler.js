/**
 * @file IDataHandler.js
 * @description Common Interface of DataHandler
 */

/** @interface */
export default class IDataHandler {
    /**
     * @param {ref} dataStorage - The data storage instance to be used for data handling.
     */
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
    }
}