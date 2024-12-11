/**
 * @file DoneCreateProcessor.js
 * @description Implement of Done Create Processor
 */
import IDoneCreateProcessor from './IDoneCreateProcessor';
import { createDoneData } from '../api';


/** @implements {IDoneCreateProcessor} */
export default class DoneCreateProcessor extends IDoneCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await createDoneData(param) === false) {
            return new Error('Failed to create Done Data');
        }

        this.dataStorage.addDoneItem(param);
    }
}