/**
 * @file ITodoCreateProcessor.js
 * @description Interface of Todo Create Processor
 */
import IProcessor from '../../../../../../shared/interfaces/IProcessor'


/** @interface */
export default class ITodoCreateProcessor extends IProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    /**
     * Executes the processing logic for this processor.
     * 
     * @abstract
     * @param {string} param
     * @throws {Error} If the method is not implemented in the subclass.
     */
    process(param) {
        throw new Error('Method not implemented');
    }
}