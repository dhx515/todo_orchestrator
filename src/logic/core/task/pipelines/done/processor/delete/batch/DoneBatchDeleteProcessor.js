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
        try {
            this.dataStorage.setDoneList = await batchDeleteDoneData(param);
        } catch (error) {
            return new Error(`Error deleting Done Datas: ${error.message}`);
        }
    }
}