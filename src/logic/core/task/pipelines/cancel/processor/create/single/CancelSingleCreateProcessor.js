/**
 * @file CancelSingleCreateProcessor.js
 * @description Implement of Cancel Single Create Processor
 */
import ICancelSingleCreateProcessor from './ICancelSingleCreateProcessor';
import { singleCreateCancelData } from '@/logic/api/cancel/api';


/** @implements {ICancelSingleCreateProcessor} */
export default class CancelSingleCreateProcessor extends ICancelSingleCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await singleCreateCancelData(param) === false) {
            return new Error('Failed to create Cancel Data');
        }

        this.dataStorage.addCancelItem(param);
    }
}