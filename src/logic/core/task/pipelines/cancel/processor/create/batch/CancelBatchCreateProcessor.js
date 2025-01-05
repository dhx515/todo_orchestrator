/**
 * @file CancelBatchCreateProcessor.js
 * @description Implement of Cancel Batch Create Processor
 */
import ICancelBatchCreateProcessor from './ICancelBatchCreateProcessor';
import { batchCreateCancelData } from '@/logic/api/cancel/api';


/** @implements {ICancelBatchCreateProcessor} */
export default class CancelBatchCreateProcessor extends ICancelBatchCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await batchCreateCancelData(param) === false) {
            return new Error('Failed to create Cancel Data');
        }

        this.dataStorage.addCancelItemList(param);
    }
}