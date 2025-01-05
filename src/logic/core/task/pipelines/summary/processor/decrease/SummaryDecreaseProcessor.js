/**
 * @file SummaryDecreaseProcessor.js
 * @description Implement of Summary Decrease Processor
 */
import ISummaryDecreaseProcessor from './ISummaryDecreaseProcessor';
import { decreaseSummaryData } from '@/logic/api/summary/api';


/** @implements {ISummaryDecreaseProcessor} */
export default class SummaryDecreaseProcessor extends ISummaryDecreaseProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param, value = 1) {
        if (await decreaseSummaryData(param) === false) {
            return new Error('Failed to decrease Summary Data');
        }

        this.dataStorage.decreaseItemCount(param, value);
    }
}