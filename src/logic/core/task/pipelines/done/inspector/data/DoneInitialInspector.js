/**
 * @file DoneInitialInspector.js
 * @description Implement of Done Data Inspector
 */
import IDoneDataInspector from './IDoneDataInspector';


/** @implements {IDoneDataInspector} */
export default class DoneInitialInspector extends IDoneDataInspector {
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