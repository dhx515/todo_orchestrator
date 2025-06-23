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
        try {
            this.dataStorage.setDoneList = await batchCreateDoneData(param);
        } catch (error) {
            return new Error(`Error creating Done Datas: ${error.message}`);
        }
    }
}