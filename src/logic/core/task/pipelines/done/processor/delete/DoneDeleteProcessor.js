/**
 * @file DoneDeleteProcessor.js
 * @description Implement of Done Delete Processor
 */
import IDoneDeleteProcessor from './IDoneDeleteProcessor';
import { deleteDoneData } from '../api';


/** @implements {IDoneDeleteProcessor} */
export default class DoneDeleteProcessor extends IDoneDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await deleteDoneData(param) === false) {
            return new Error('Failed to delete Done Data');
        }

        this.dataStorage.deleteDoneItem(param);
    }
}