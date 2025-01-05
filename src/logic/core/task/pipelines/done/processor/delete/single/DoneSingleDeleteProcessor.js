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
        if (await singleDeleteDoneData(param) === false) {
            return new Error('Failed to delete Done Data');
        }

        this.dataStorage.deleteDoneItem(param);
    }
}