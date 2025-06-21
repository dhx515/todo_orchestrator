/**
 * @file IProcessor.js
 * @description Common Interface of Processor
 */
import IDataHandler from './IDataHandler';


/** @interface */
export default class IProcessor extends IDataHandler{
    constructor(dataStorage) {
        super(dataStorage);
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