/**
 * @file CancelCreateProcessor.js
 * @description Implement of Cancel Create Processor
 */
import ICancelCreateProcessor from './ICancelCreateProcessor';
import { createCancelData } from '../api';


/** @implements {ICancelCreateProcessor} */
export default class CancelCreateProcessor extends ICancelCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await createCancelData(param) === false) {
            return new Error('Failed to create Cancel Data');
        }

        this.dataStorage.addCancelItem(param);
    }
}