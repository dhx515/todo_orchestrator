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
        try {
            this.dataStorage.setCancelList = await singleCreateCancelData(param);
        } catch (error) {
            return new Error(`Error creating Cancel Data: ${error.message}`);
        }
    }
}