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
        try {
            this.dataStorage.setCancelList = await batchDeleteCancelData(param);
        } catch (error) {
            return new Error(`Error deleting Cancel Datas: ${error.message}`);
        }
    }
}