/**
 * @file CancelBatchDeleteProcessor.js
 * @description Implement of Cancel Batch Delete Processor
 */
import ICancelBatchDeleteProcessor from './ICancelBatchDeleteProcessor';
import { batchDeleteCancelData } from '@/logic/api/cancel/api';


/** @implements {ICancelBatchDeleteProcessor} */
export default class CancelDeleteProcessor extends ICancelBatchDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await batchDeleteCancelData(param) === false) {
            return new Error('Failed to delete Cancel Data');
        }

        this.dataStorage.deleteCancelItemList(param);
    }
}