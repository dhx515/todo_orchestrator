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
        try {
            this.dataStorage.setCancelList = await batchCreateCancelData(param);
        } catch (error) {
            return new Error(`Error creating Cancel Datas: ${error.message}`);
        }
    }
}