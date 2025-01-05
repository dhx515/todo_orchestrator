/**
 * @file DoneFetchProcessor.js
 * @description Implement of Done Fetch Processor
 */
import IDoneFetchProcessor from './IDoneFetchProcessor';
import { fetchDoneData } from '@/logic/api/done/api';


/** @implements {IDoneFetchProcessor} */
export default class DoneFetchProcessor extends IDoneFetchProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        const doneList = await fetchDoneData(param) || [];

        this.dataStorage.setDoneList(doneList);
    }
}