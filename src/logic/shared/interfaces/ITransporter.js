/**
 * @file ITransporter.js
 * @description Common Interface of Transporter
 */
import IDataStorage from "./IDataStorage";


/** @interface */
export default class ITransporter {
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

    /**
     * Transports or transforms the internal data into a specific format or structure.
     * This method should be overridden in a subclass to provide the necessary data transformation logic.
     *
     * @abstract
     * @returns {*} - The transformed data. The return type should be documented in the subclass based on the specific transformation logic.
     * @throws {Error} If the method is not implemented in the subclass.
     * @example
     * class MyTransporter extends ITransporter {
     *   transport() {
     *     // Custom transformation logic
     *     return transformedData;
     *   }
     * }
     */
    transport() {
        throw new Error('Method not implemented');
    }
}