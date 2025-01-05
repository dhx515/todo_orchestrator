/**
 * @file DoneBatchCreateProcessor.js
 * @description Implement of Done Batch Create Processor
 */
import IDoneBatchCreateProcessor from './IDoneBatchCreateProcessor';
import { batchCreateDoneData } from '@/logic/api/done/api';


/** @implements {IDoneBatchCreateProcessor} */
export default class DoneBatchCreateProcessor extends IDoneBatchCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await batchCreateDoneData(param) === false) {
            return new Error('Failed to create Done Data');
        }

        this.dataStorage.addDoneItemList(param);
    }
}