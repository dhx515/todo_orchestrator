/**
 * @file SummaryDecreaseProcessor.js
 * @description Implement of Summary Decrease Processor
 */
import ISummaryDecreaseProcessor from './ISummaryDecreaseProcessor';
import { decreaseSummaryData } from '../api';


/** @implements {ISummaryDecreaseProcessor} */
export default class SummaryDecreaseProcessor extends ISummaryDecreaseProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await decreaseSummaryData(param) === false) {
            return new Error('Failed to decrease Summary Data');
        }

        this.dataStorage.decreaseItemCount(param);
    }
}