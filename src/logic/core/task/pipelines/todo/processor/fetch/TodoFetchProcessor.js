/**
 * @file TodoFetchProcessor.js
 * @description Implement of Todo Fetch Processor
 */
import ITodoFetchProcessor from './ITodoFetchProcessor';
import { fetchTodoData } from '@/logic/api/todo/api';


/** @implements {ITodoFetchProcessor} */
export default class TodoFetchProcessor extends ITodoFetchProcessor {
    constructor(dataStorage) {
        super(dataStorage);
    }

    async process(param) {
        const todoList = await fetchTodoData(param) || [];

        this.dataStorage.setTodoList(todoList);
    }
}