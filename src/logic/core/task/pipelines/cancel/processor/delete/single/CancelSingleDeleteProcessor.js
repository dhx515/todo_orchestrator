/**
 * @file CancelSingleDeleteProcessor.js
 * @description Implement of Cancel Single Delete Processor
 */
import ICancelSingleDeleteProcessor from './ICancelSingleDeleteProcessor';
import { singleDeleteCancelData } from '@/logic/api/cancel/api';


/** @implements {ICancelSingleDeleteProcessor} */
export default class CancelDeleteProcessor extends ICancelSingleDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await singleDeleteCancelData(param) === false) {
            return new Error('Failed to delete Cancel Data');
        }

        this.dataStorage.deleteCancelItem(param);
    }
}