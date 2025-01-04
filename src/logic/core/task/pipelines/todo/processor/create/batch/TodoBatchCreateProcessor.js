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
        if (await batchCreateTodoData(param) === false) {
            return new Error('Failed to create Todo Data');
        }

        this.dataStorage.addTodoItemList(param);
    }
}