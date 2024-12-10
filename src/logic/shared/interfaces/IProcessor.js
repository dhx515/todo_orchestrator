/**
 * @file IProcessor.js
 * @description Common Interface of Processor
 */
import IDataStorage from "./IDataStorage";


/** @interface */
export default class IProcessor {
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
     * Executes the processing logic for this processor.
     * This method should be overridden in a subclass if additional parameters are required.
     * 
     * @abstract
     * @throws {Error} If the method is not implemented in the subclass.
     * @example
     * class MyProcessor extends IProcessor {
     *   process(params) {
     *     // custom processing logic
     *   }
     */
    process() {
        throw new Error('Method not implemented');
    }
}