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
        try {
            this.dataStorage.setTodo(singleCreateTodoData(param));
        } catch (error) {
            return new Error(`Error creating Todo Data: ${error.message}`);
        }
    }
}