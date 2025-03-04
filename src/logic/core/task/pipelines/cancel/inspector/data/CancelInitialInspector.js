/**
 * @file CancelInitialInspector.js
 * @description Implement of Cancel Data Inspector
 */
import ICancelDataInspector from './ICancelDataInspector';


/** @implements {ICancelDataInspector} */
export default class CancelInitialInspector extends ICancelDataInspector {
    constructor(dataStorage){
        super(dataStorage);
    }

    inspect() {
        const cancelList = this.dataStorage.getCancelList();

        if (cancelList === null || !Array.isArray(cancelList)) {
            return false;
        }

        return true;
    }
}