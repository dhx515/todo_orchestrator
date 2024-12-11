/**
 * @file SummaryIncreaseProcessor.js
 * @description Implement of Summary Increase Processor
 */
import ISummaryIncreaseProcessor from './ISummaryIncreaseProcessor';
import { increaseSummaryData } from '../api';


/** @implements {ISummaryIncreaseProcessor} */
export default class SummaryIncreaseProcessor extends ISummaryIncreaseProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await increaseSummaryData(param) === false) {
            return new Error('Failed to increase Summary Data');
        }

        this.dataStorage.increaseItemCount(param);
    }
}