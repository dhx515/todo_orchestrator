/**
 * @file TodoCreateProcessor.js
 * @description Implement of Todo Create Processor
 */
import ITodoCreateProcessor from './ITodoCreateProcessor';
import { createTodoData } from '../api';


/** @implements {ITodoCreateProcessor} */
export default class TodoCreateProcessor extends ITodoCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await createTodoData(param) === false) {
            return new Error('Failed to create Todo Data');
        }

        this.dataStorage.addTodoItem(param);
    }
}