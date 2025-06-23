/**
 * @file TodoBatchDeleteProcessor.js
 * @description Implement of Todo Batch Delete Processor
 */
import ITodoBatchDeleteProcessor from './ITodoBatchDeleteProcessor';
import { batchDeleteTodoData } from '@/logic/api/todo/api';


/** @implements {ITodoBatchDeleteProcessor} */
export default class TodoBatchDeleteProcessor extends ITodoBatchDeleteProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        try {
            this.dataStorage.setTodo(batchDeleteTodoData(param));
        } catch (error) {
            return new Error(`Error deleting Todo Data: ${error.message}`);
        }
    }
}