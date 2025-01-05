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
        if (await singleCreateDoneData(param) === false) {
            return new Error('Failed to create Done Data');
        }

        this.dataStorage.addDoneItem(param);
    }
}