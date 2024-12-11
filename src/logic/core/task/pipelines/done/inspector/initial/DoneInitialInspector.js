/**
 * @file DoneInitialInspector.js
 * @description Implement of Done Initial Inspector
 */
import IDoneInitialInspector from './IDoneInitialInspector';


/** @implements {IDoneInitialInspector} */
export default class DoneInitialInspector extends IDoneInitialInspector {
    constructor(dataStorage){
        super(dataStorage);
    }

    inspect() {
        const doneList = this.dataStorage.getDoneList();

        if (doneList === null || !Array.isArray(doneList)) {
            return false;
        }

        return true;
    }
}