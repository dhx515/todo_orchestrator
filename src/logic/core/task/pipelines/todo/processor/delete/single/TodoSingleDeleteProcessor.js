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
        try {
            this.dataStorage.setTodo(singleDeleteTodoData(param));
        } catch (error) {
            return new Error(`Error deleting Todo Data: ${error.message}`);
        }
    }
}