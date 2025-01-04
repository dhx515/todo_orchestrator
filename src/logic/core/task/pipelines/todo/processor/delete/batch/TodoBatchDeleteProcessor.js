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
        if (await batchDeleteTodoData(param) === false) {
            return new Error('Failed to delete Todo Data');
        }

        param.forEach(item => {
            this.dataStorage.deleteTodoItem(item);
        });
    }
}