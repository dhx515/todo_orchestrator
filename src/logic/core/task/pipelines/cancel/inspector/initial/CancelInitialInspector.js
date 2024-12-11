/**
 * @file CancelInitialInspector.js
 * @description Implement of Cancel Initial Inspector
 */
import ICancelInitialInspector from './ICancelInitialInspector';


/** @implements {ICancelInitialInspector} */
export default class CancelInitialInspector extends ICancelInitialInspector {
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