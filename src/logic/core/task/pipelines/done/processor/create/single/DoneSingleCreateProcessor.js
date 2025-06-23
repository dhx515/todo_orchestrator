/**
 * @file DoneSingleCreateProcessor.js
 * @description Implement of Done Single Create Processor
 */
import IDoneSingleCreateProcessor from './IDoneSingleCreateProcessor';
import { singleCreateDoneData } from '@/logic/api/done/api';


/** @implements {IDoneSingleCreateProcessor} */
export default class DoneSingleCreateProcessor extends IDoneSingleCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        try {
            this.dataStorage.setDoneList = await singleCreateDoneData(param);
        } catch (error) {
            return new Error(`Error creating Done Data: ${error.message}`);
        }
    }
}