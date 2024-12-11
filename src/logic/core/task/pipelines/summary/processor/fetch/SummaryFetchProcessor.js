/**
 * @file SummaryFetchProcessor.js
 * @description Implement of Summary Fetch Processor
 */
import ISummaryFetchProcessor from './ISummaryFetchProcessor';
import { fetchSummaryData } from '../api';


/** @implements {ISummaryFetchProcessor} */
export default class SummaryFetchProcessor extends ISummaryFetchProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        const summary = await fetchSummaryData(param);

        this.dataStorage.setSummary(summary);
    }
}