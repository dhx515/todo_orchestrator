/**
 * @file SummaryIncreaseProcessor.js
 * @description Implement of Summary Increase Processor
 */
import ISummaryIncreaseProcessor from './ISummaryIncreaseProcessor';
import { increaseSummaryData } from '@/logic/api/summary/api';


/** @implements {ISummaryIncreaseProcessor} */
export default class SummaryIncreaseProcessor extends ISummaryIncreaseProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param, value = 1) {
        if (await increaseSummaryData(param) === false) {
            return new Error('Failed to increase Summary Data');
        }

        this.dataStorage.increaseItemCount(param, value);
    }
}