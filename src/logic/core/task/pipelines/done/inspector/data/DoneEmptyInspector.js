/**
 * @file DoneEmptyInspector.js
 * @description Implement of Done Empty Inspector
 */
import IDoneDataInspector from './IDoneDataInspector';


/** @implements {IDoneDataInspector} */
export default class DoneEmptyInspector extends IDoneDataInspector {
    constructor(dataStorage){
        super(dataStorage);
    }

    inspect() {
        const doneList = this.dataStorage.getDoneList();

        if (doneList === null || !Array.isArray(doneList)) {
            return true;
        }

        return false;
    }
}