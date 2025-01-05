/**
 * @file ISummaryIncreaseProcessor.js
 * @description Interface of Summary Increase Processor
 */
import IProcessor from '@/logic/shared/interfaces/IProcessor';


/** @interface */
export default class ISummaryIncreaseProcessor extends IProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    /**
     * Executes the processing logic for this processor.
     * 
     * @abstract
     * @param {string} param
     * @param {number} value
     * @throws {Error} If the method is not implemented in the subclass.
     */
    process(param, value = 1) {
        throw new Error('Method not implemented');
    }
}