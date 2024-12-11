/**
 * @file CancelDeleteProcessor.js
 * @description Implement of Cancel Delete Processor
 */
import ICancelDeleteProcessor from './ICancelDeleteProcessor';
import { deleteCancelData } from '../api';


/** @implements {ICancelDeleteProcessor} */
export default class CancelDeleteProcessor extends ICancelDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await deleteCancelData(param) === false) {
            return new Error('Failed to delete Cancel Data');
        }

        this.dataStorage.deleteCancelItem(param);
    }
}