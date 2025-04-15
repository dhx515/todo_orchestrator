/**
 * @file IDataHandler.js
 * @description Common Interface of DataHandler
 */
import IDataStorage from "./IDataStorage";

/** @interface */
export default class IDataHandler {
    /**
     * @param {IDataStorage} dataStorage - The data storage instance to be used for data handling.
     */
    constructor(dataStorage) {
        this.validateDataStorage(dataStorage);
        this.dataStorage = dataStorage;
    }

    /**
     * Validates the data storage object.
     * @param {IDataStorage} dataStorage - The data storage instance to validate.
     * @throws Will throw an error if the dataStorage is not an instance of IDataStorage.
     */
    validateDataStorage(dataStorage) {
        if (!(dataStorage instanceof IDataStorage)) {
            throw new Error('Invalid data storage object');
        }
    }
}