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
        try {
            this.dataStorage.setCancelList = await singleDeleteCancelData(param);
        } catch (error) {
            return new Error(`Error deleting Cancel Data: ${error.message}`);
        }
    }
}