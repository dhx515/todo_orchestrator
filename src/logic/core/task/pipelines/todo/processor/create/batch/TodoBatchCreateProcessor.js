/**
 * @file TodoBatchCreateProcessor.js
 * @description Implement of Todo Batch Create Processor
 */
import ITodoBatchCreateProcessor from './ITodoBatchCreateProcessor';
import { batchCreateTodoData } from '@/logic/api/todo/api';


/** @implements {ITodoBatchCreateProcessor} */
export default class TodoBatchCreateProcessor extends ITodoBatchCreateProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        try {
            this.dataStorage.setTodo(batchCreateTodoData(param));
        } catch (error) {
            return new Error(`Error creating Todo Data: ${error.message}`);
        }
    }
}