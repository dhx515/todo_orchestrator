/**
 * @file TodoInitialInspector.js
 * @description Implement of Todo Initial Inspector
 */
import ITodoInitialInspector from './ITodoInitialInspector';


/** @implements {ITodoInitialInspector} */
export default class TodoInitialInspector extends ITodoInitialInspector {
    constructor(dataStorage){
        super(dataStorage);
    }

    inspect() {
        const todoList = this.dataStorage.getTodoList();

        if (todoList === null || !Array.isArray(todoList)) {
            return false;
        }

        return true;
    }
}