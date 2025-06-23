/**
 * @file DoneSingleDeleteProcessor.js
 * @description Implement of Done Delete Processor
 */
import IDoneSingleDeleteProcessor from './IDoneSingleDeleteProcessor';
import { singleDeleteDoneData } from '@/logic/api/done/api';


/** @implements {IDoneSingleDeleteProcessor} */
export default class DoneSingleDeleteProcessor extends IDoneSingleDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        try {
            this.dataStorage.setDoneList = await singleDeleteDoneData(param);
        } catch (error) {
            return new Error(`Error deleting Done Data: ${error.message}`);
        }
    }
}