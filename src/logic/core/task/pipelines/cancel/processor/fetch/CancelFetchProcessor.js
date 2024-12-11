/**
 * @file CancelFetchProcessor.js
 * @description Implement of Cancel Fetch Processor
 */
import ICancelFetchProcessor from './ICancelFetchProcessor';
import { fetchCancelData } from '../api';


/** @implements {ICancelFetchProcessor} */
export default class CancelFetchProcessor extends ICancelFetchProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        const cancelList = await fetchCancelData(param) || [];

        this.dataStorage.setCancelList(cancelList);
    }
}