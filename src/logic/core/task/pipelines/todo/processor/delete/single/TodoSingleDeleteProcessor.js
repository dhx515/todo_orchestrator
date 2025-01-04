/**
 * @file TodoSingleDeleteProcessor.js
 * @description Implement of Todo Single Delete Processor
 */
import ITodoSingleDeleteProcessor from './ITodoSingleDeleteProcessor';
import { singleDeleteTodoData } from '@/logic/api/todo/api';


/** @implements {ITodoSingleDeleteProcessor} */
export default class TodoSingleDeleteProcessor extends ITodoSingleDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        if (await singleDeleteTodoData(param) === false) {
            return new Error('Failed to delete Todo Data');
        }

        this.dataStorage.deleteTodoItem(param);
    }
}