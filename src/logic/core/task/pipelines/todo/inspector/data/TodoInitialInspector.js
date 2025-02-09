/**
 * @file TodoInitialInspector.js
 * @description Implement of Todo Initial Inspector
 */
import ITodoDataInspector from './ITodoDataInspector';


/** @implements {ITodoDataInspector} */
export default class TodoInitialInspector extends ITodoDataInspector {
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