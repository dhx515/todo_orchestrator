/**
 * @file IDoneFetchProcessor.js
 * @description Interface of Done Fetch Processor
 */
import IProcessor from '../../../../../../shared/interfaces/IProcessor'


/** @interface */
export default class IDoneFetchProcessor extends IProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    /**
     * Executes the processing logic for this processor.
     * 
     * @abstract
     * @param {object} param
     * @throws {Error} If the method is not implemented in the subclass.
     */
    process(param) {
        throw new Error('Method not implemented');
    }
}