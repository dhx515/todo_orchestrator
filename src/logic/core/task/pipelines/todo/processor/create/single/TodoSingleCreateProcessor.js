/**
 * @file TodoSingleCreateProcessor.js
 * @description Implement of Todo Single Create Processor
 */
import ITodoSingleCreateProcessor from './ITodoSingleCreateProcessor';
import { singleCreateTodoData } from '@/logic/api/todo/api';


/** @implements {ITodoSingleCreateProcessor} */
export default class TodoSingleCreateProcessor extends ITodoSingleCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await singleCreateTodoData(param) === false) {
            return new Error('Failed to create Todo Data');
        }

        this.dataStorage.addTodoItem(param);
    }
}