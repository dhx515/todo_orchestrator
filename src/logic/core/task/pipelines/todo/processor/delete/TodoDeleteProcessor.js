/**
 * @file TodoDeleteProcessor.js
 * @description Implement of Todo Delete Processor
 */
import ITodoDeleteProcessor from './ITodoDeleteProcessor';
import { deleteTodoData } from '../api';


/** @implements {ITodoDeleteProcessor} */
export default class TodoDeleteProcessor extends ITodoDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await deleteTodoData(param) === false) {
            return new Error('Failed to delete Todo Data');
        }

        this.dataStorage.deleteTodoItem(param);
    }
}