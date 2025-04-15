/**
 * @file ITransporter.js
 * @description Common Interface of Transporter
 */
import IDataHandler from './IDataHander';


/** @interface */
export default class ITransporter extends IDataHandler{
    constructor(dataStorage) {
        super(dataStorage);
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