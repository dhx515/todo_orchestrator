/**
 * @file DoneBatchDeleteProcessor.js
 * @description Implement of Done Delete Processor
 */
import IDoneBatchDeleteProcessor from './IDoneBatchDeleteProcessor';
import { batchDeleteDoneData } from '@/logic/api/done/api';


/** @implements {IDoneBatchDeleteProcessor} */
export default class DoneBatchDeleteProcessor extends IDoneBatchDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await batchDeleteDoneData(param) === false) {
            return new Error('Failed to delete Done Data');
        }

        this.dataStorage.deleteDoneItemList(param);
    }
}